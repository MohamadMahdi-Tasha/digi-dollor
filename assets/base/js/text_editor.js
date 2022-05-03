ClassicEditor
    .create( document.querySelector( '.editor' ) )
    .then( editor => {
        console.log( editor );
        editor.config.height = 500;
    } )
    .catch( error => {
        console.error( error );
    } );