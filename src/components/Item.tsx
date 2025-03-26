import '../styles/Item.css'

import Button from "./Button"
import Checkbox from "./Checkbox"
import Content from "./Content"


function Item() {
  return (
    <div className="item-main">
      <Checkbox />
      <Content />
      <Button text="edit" />
      <Button text="delete" />
    </div>
  )
}

export default Item
