import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {thumbnailDetails, onChangeThumbnail, isActive} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

    const onClickThumbnail = () => {
      onChangeThumbnail(id)
    }

    const activeClassName = isActive ? 'active-thumbnail-item' : ''

    return (
      <li className="list-item">
        <button className="button" type="button" onClick={onClickThumbnail}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`thumbnail-item ${activeClassName}`}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
