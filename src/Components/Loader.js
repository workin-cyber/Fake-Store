import Spinner from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function Loader() {
    return <Spinner
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
    />
}