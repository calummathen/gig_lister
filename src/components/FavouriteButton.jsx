const FavouriteButton = ({favourite, toggleFavourite, band_name}) => {

  return (
    <div>
      <button onClick={() => toggleFavourite(band_name)}>{favourite ? "Unfavourite" : "Favourite"}</button>
    </div>
  )
}

export default FavouriteButton;