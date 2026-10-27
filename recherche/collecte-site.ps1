$ErrorActionPreference = 'Stop'
$researchRoot = $PSScriptRoot
$rawRoot = Join-Path $researchRoot 'sources'
$mediaRoot = Join-Path $researchRoot 'visuels'
New-Item -ItemType Directory -Path $rawRoot, $mediaRoot -Force | Out-Null
$rawFile = Join-Path $rawRoot 'ancien-site-pages.json'
& curl.exe -fLsS --retry 2 --max-time 45 'https://ibidunfarming.com/wp-json/wp/v2/pages?include=7429,4439,4400,15916,16547&per_page=100&_fields=id,link,title,modified,content' -o $rawFile
if ($LASTEXITCODE -ne 0) { throw 'Lecture du site impossible.' }
$pages = Get-Content -LiteralPath $rawFile -Raw | ConvertFrom-Json
$imageUrls = [System.Collections.Generic.HashSet[string]]::new()
$records = foreach ($page in $pages) {
    $html = $page.content.rendered
    $plain = [regex]::Replace($html, '(?is)<(style|script|svg)\b[^>]*>.*?</\1>', '')
    $plain = [regex]::Replace($plain, '(?i)</(p|div|h[1-6]|li|section)>|<br\s*/?>', "`n")
    $plain = [System.Net.WebUtility]::HtmlDecode([regex]::Replace($plain, '<[^>]+>', ' '))
    $plain = [regex]::Replace($plain, '[\t ]+', ' ')
    $plain = [regex]::Replace($plain, '\n\s*\n+', "`n`n").Trim()
    $links = @([regex]::Matches($html, 'href=["'']([^"'']+)["'']') | ForEach-Object { [System.Net.WebUtility]::HtmlDecode($_.Groups[1].Value) } | Sort-Object -Unique)
    $images = @([regex]::Matches($html, 'https://ibidunfarming\.com/wp-content/uploads/[^\s"''<>]+?\.(?:png|jpe?g|webp)') | ForEach-Object { $_.Value } | Sort-Object -Unique)
    foreach ($url in $images) { [void]$imageUrls.Add($url) }
    [pscustomobject]@{ id=$page.id; title=$page.title.rendered; url=$page.link; modified=$page.modified; text=$plain; links=$links; images=$images }
}
$records | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $rawRoot 'ancien-site-contenus.json') -Encoding utf8
$records | ForEach-Object { "# $($_.title)`n`nSource : $($_.url)`nDernière modification déclarée par WordPress : $($_.modified)`n`n$($_.text)`n`n" } | Set-Content -LiteralPath (Join-Path $rawRoot 'ancien-site-contenus.md') -Encoding utf8
$imageUrls | Sort-Object | Set-Content -LiteralPath (Join-Path $rawRoot 'ancien-site-images.txt') -Encoding utf8
$records | Select-Object id,title,url,modified,@{n='images';e={$_.images.Count}} | ConvertTo-Json
Write-Output ('Images distinctes référencées : ' + $imageUrls.Count)
