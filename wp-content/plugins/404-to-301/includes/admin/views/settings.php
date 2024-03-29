<?php

// If this file is called directly, abort.
defined( 'ABSPATH' ) or exit; ?>

<form method="post" action="options.php">
	<?php settings_fields( 'i4t3_gnrl_options' ); ?>
	<?php $options = get_option( 'i4t3_gnrl_options' ); ?>
	<?php $cp_style = ( $options['redirect_to'] !== 'page' ) ? 'jj4t3-hide' : '' ?>
	<?php $cl_style = ( $options['redirect_to'] !== 'link' ) ? 'jj4t3-hide' : '' ?>
	<?php $cl_style = ( ! in_array( $options['redirect_to'], array( 'link', 'page', '0' ) ) ) ? '' : $cl_style; ?>
	<table class="form-table">
		<tbody>
			<?php $statuses = jj4t3_redirect_statuses(); ?>
			<?php if ( !empty( $statuses ) ) : ?>
				<tr>
					<th><?php _e( 'Redirect type', '404-to-301' ); ?></th>
					<td>
						<select name='i4t3_gnrl_options[redirect_type]'>
							<?php foreach ( $statuses as $status => $label ) : ?>
								<option value='<?php echo $status; ?>' <?php selected( $options['redirect_type'], $status ); ?>><?php echo $label; ?></option>
							<?php endforeach; ?>
						</select>
						<p class="description jj4t3-p-desc"><a target="_blank" href="https://moz.com/learn/seo/redirection"><strong><?php _e( 'Learn more', '404-to-301' ); ?></strong></a> <?php _e( 'about these redirect types', '404-to-301' ); ?>
						</p>
					</td>
				</tr>
			<?php endif; ?>
			<tr>
				<th><?php _e( 'Redirect to', '404-to-301' ); ?></th>
				<td>
					<select name='i4t3_gnrl_options[redirect_to]' id='jj4t3_redirect_to'>
						<option value='page' <?php selected( $options['redirect_to'], 'page' ); ?>><?php _e( 'Existing Page', '404-to-301' ); ?></option>
						<option value='link' <?php selected( $options['redirect_to'], 'link' ); ?>><?php _e( 'Custom URL', '404-to-301' ); ?></option>
						<option value='0' <?php selected( $options['redirect_to'], 0 ); ?>><?php _e( 'No Redirect', '404-to-301' ); ?></option>
					</select>
					<p class="description jj4t3-p-desc"><strong><?php _e( 'Existing Page', '404-to-301' ); ?>:</strong> <?php _e( 'Select any WordPress page as a 404 page', '404-to-301' ); ?>.</p>
					<p class="description jj4t3-p-desc"><strong><?php _e( 'Custom URL', '404-to-301' ); ?>:</strong> <?php _e( 'Redirect 404 requests to a specific URL', '404-to-301' ); ?>.</p>
					<p class="description jj4t3-p-desc"><strong><?php _e( 'No Redirect', '404-to-301' ); ?>:</strong> <?php _e( 'To disable redirect', '404-to-301' ); ?>.</p>
					<p class="description jj4t3-p-desc"><strong><?php _e( 'You can override this by setting individual custom redirects from error logs list.', '404-to-301' ); ?></strong></p>
				</td>
			</tr>
			<tr id="custom_page" class="<?php echo $cp_style; ?>">
				<th><?php _e( 'Select the page', '404-to-301' ); ?></th>
				<td>
					<?php wp_dropdown_pages( array( 'name' => 'i4t3_gnrl_options[redirect_page]', 'selected' => $options['redirect_page'] ) ); ?>
					<p class="description jj4t3-p-desc"><?php _e( 'The default 404 page will be replaced by the page you choose in this list.', '404-to-301' ); ?></p>
					<p class="description jj4t3-p-desc"><?php printf( __( 'You can <a href="%s" target="_blank">create a custom 404</a> page and assign that page here.', '404-to-301' ), admin_url( 'post-new.php?post_type=page' ) ); ?></p>
				</td>
			</tr>
			<tr id="custom_url" class="<?php echo $cl_style; ?>">
				<th><?php _e( 'Custom URL', '404-to-301' ); ?></th>
				<td>
					<input type="url" size="40" placeholder="<?php echo home_url(); ?>" name="i4t3_gnrl_options[redirect_link]" value="<?php echo $options['redirect_link']; ?>">
					<p class="description jj4t3-p-desc"><?php _e( 'Enter any url (including http://)', '404-to-301' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><?php _e( 'Log 404 Errors', '404-to-301' ); ?></th>
				<td>
					<input type="checkbox" name="i4t3_gnrl_options[redirect_log]" value="1" <?php checked( jj4t3_get_option( 'redirect_log' ), 1 ); ?> />
					<p class="description jj4t3-p-desc"><?php _e( 'Enable/Disable Logging', '404-to-301' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><?php _e( 'Email notifications', '404-to-301' ); ?></th>
				<td>
					<input type="checkbox" name="i4t3_gnrl_options[email_notify]" value="1" <?php checked( jj4t3_get_option( 'email_notify' ), 1 ); ?> />
					<p class="description jj4t3-p-desc"><?php _e( 'If you check this, an email will be sent on every 404 log on the admin email account.', '404-to-301' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><?php _e( 'Email address', '404-to-301' ); ?></th>
				<td>
					<?php $notify_address = ( isset( $options['email_notify_address'] ) ) ? $options['email_notify_address'] : get_option( 'admin_email' ); ?>
					<input type="email" placeholder="<?php echo get_option( 'admin_email' ); ?>" name="i4t3_gnrl_options[email_notify_address]" value="<?php echo $notify_address; ?>">
					<p class="description jj4t3-p-desc"><?php _e( 'Change the recipient email address for error log notifications.', '404-to-301' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><?php _e( 'Exclude paths', '404-to-301' ); ?></th>
				<td>
					<textarea rows="5" cols="50" placeholder="wp-content/plugins/abc-plugin/css/" name="i4t3_gnrl_options[exclude_paths]"><?php echo $options['exclude_paths']; ?></textarea>
					<p class="description jj4t3-p-desc"><?php _e( 'If you want to exclude few paths from error logs, enter here. One per line.', '404-to-301' ); ?></p>
				</td>
			</tr>
		</tbody>
	</table>
	<?php submit_button( __( 'Save settings', '404-to-301' ) ); ?>
</form><!-- /.form -->