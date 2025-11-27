<?php
/**
 * Plugin Name:       Block: Description List
 * Description:       A block for creating a list of groups of terms and definitions. Common uses are to implement a glossary or to display metadata (a list of key-value pairs).
 * Version:           1.0.0
 * Requires at least: 6.8
 * Requires PHP:      8.3
 * Author:            Germán Freixinós López
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gfl-block-description-list
 *
 * @package           gfl-block-description-list
 */

if (!defined('ABSPATH')) {
	exit(); // Exit if accessed directly.
}

/**
 * Registers the block(s) using a `blocks-manifest.php` file.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 */
function gfl_block_description_list_register_blocks() {
	$build_dir = __DIR__ . '/build';
	$manifest = $build_dir . '/blocks-manifest.php';

	if (
		function_exists('wp_register_block_types_from_metadata_collection') &&
		file_exists($manifest)
	) {
		wp_register_block_types_from_metadata_collection($build_dir, $manifest);
	}
}
add_action('init', 'gfl_block_description_list_register_blocks');
