function Button(props: { text: string, onClick: any }) {
  return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Button
