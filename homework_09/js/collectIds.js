function collectIds(movies) {
    return getTransformedArray(getFilteredArray(movies, elem => elem.rating>3),
            elem => elem.id);
}