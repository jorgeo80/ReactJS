import PropTypes from 'prop-types';

export const FirstApp = ( { name, title, subTitle } ) => {

    return (
        <>
            <h1> { title } </h1>  
            <p> { subTitle } </p>
            <p> { name } </p>
        </>
        
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string

}
FirstApp.defaultProps = {
    name: 'Humano',
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
}