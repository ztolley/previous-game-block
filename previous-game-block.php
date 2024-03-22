<?php
/**
 * Plugin Name:       Previous Game Block
 * Description:       Display game result
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Zac Tolley
 * License:           MIT
 * License URI:       https://choosealicense.com/licenses/mit/
 * Text Domain:       previous-game
 *
 * @package           exsite
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function previous_game_block_previous_game_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'previous_game_block_previous_game_block_block_init' );
