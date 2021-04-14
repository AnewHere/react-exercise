import './LinkButton.scss';

const LinkButton = (props) => {
  return <button {...props} className="util-button">{props.children}</button>
}

export default LinkButton;