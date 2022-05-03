ClassicEditor
    .create( document.querySelector( '#dv-editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );