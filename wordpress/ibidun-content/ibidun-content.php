<?php
/**
 * Plugin Name: Ibidun Farming Content
 * Description: Content types and editorial fields for the Ibidun Farming headless website.
 * Version: 0.1.0
 * Author: Ibidun Farming
 * License: GPL-2.0-or-later
 */

if (! defined('ABSPATH')) {
	 exit;
}

final class Ibidun_Farming_Content {
	 public static function init() {
		 add_action('init', [__CLASS__, 'register_content_types']);
		 add_action('init', [__CLASS__, 'register_meta']);
	 }

	 public static function register_content_types() {
		 self::register_type('ibf_product', 'Produit', 'Produits', 'produits', 'dashicons-cart');
		 self::register_type('ibf_training', 'Formation', 'Formations', 'formations', 'dashicons-welcome-learn-more');
		 self::register_type('ibf_project', 'Réalisation', 'Réalisations', 'realisations', 'dashicons-portfolio');
		 self::register_type('ibf_testimonial', 'Témoignage', 'Témoignages', 'temoignages', 'dashicons-format-quote');
	 }

	 private static function register_type($type, $singular, $plural, $slug, $icon) {
		 register_post_type($type, [
			 'labels' => [
				 'name' => $plural,
				 'singular_name' => $singular,
				 'add_new_item' => 'Ajouter une ' . strtolower($singular),
				 'edit_item' => 'Modifier une ' . strtolower($singular),
				 'new_item' => 'Nouvelle ' . strtolower($singular),
				 'view_item' => 'Voir la ' . strtolower($singular),
			 ],
			 'public' => true,
			 'show_in_rest' => true,
			 'rest_base' => $slug,
			 'menu_icon' => $icon,
			 'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'revisions'],
			 'has_archive' => false,
			 'rewrite' => ['slug' => $slug],
		 ]);
	 }

	 public static function register_meta() {
		 $types = ['ibf_product', 'ibf_training', 'ibf_project', 'ibf_testimonial'];
		 $fields = [
			 'ibf_subtitle' => 'string',
			 'ibf_country' => 'string',
			 'ibf_whatsapp_enabled' => 'boolean',
			 'ibf_featured' => 'boolean',
			 'ibf_external_url' => 'string',
		 ];

		 foreach ($types as $type) {
			 foreach ($fields as $key => $schema_type) {
				 register_post_meta($type, $key, [
					 'show_in_rest' => true,
					 'single' => true,
					 'type' => $schema_type,
					 'auth_callback' => function () { return current_user_can('edit_posts'); },
				]);
			 }
		 }
	 }
}

Ibidun_Farming_Content::init();
