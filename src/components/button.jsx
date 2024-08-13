import { Link } from "react-router-dom"

const Button = ({imgsrc, text, path, className, imgclass}) => {
  return (
    <Link to={path} className={`flex items-center gap-4 bg-gray-300 bg-opacity-40 w-full py-2 px-4 border-2 border-white rounded-xl ${className}`}>
        <img src={imgsrc} alt={`Icon | ${text}`} className={`w-14 h-14 ${imgclass} object-cover`}  />
        <p className="text-white text-2xl">{text}</p>
    </Link>
  )
}

export default Button
