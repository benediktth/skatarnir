//Here is the code that I have added to functions.php

/*
 *  This is added by Brynjar to get custom field with post json, 
 *  if it is breaking anything remove it
 */
register_rest_field( 'post', 'hofundur', array(
    'get_callback' => function ( $data ) {
        return get_post_meta( $data['id'], 'hofundur', true );
    }, ));
    
/*
 * This is added by Brynjar to make the excerpt longer for events in list view
 * 26.01.2020
 */
add_filter( 'excerpt_length', 'tec_custom_excerpt_length', 999 );

function tec_custom_excerpt_length( $words ) {
	
	$words = 40; // change this value to set the number of words
	
	return $words;

}


/*
 * Added by Brynjar to get Advanced Custom Fields to the JSON
 * 16.03.2020
 */
add_filter('rest_prepare_faernimerki', function($response) {
    $response->data['acf'] = get_fields($response->data['id']);
    return $response;
});

add_filter('rest_prepare_skalar', function($response) {
    $response->data['acf'] = get_fields($response->data['id']);
    return $response;
});