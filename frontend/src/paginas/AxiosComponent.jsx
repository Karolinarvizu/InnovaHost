import {Link} from 'react-router-dom';

const AxiosComponent = () => {
    return (
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-lg flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center w-full">Axios</h1>
            <ul className="space-y-2">
                <li>
                    <Link to= "/axios/categorias" className="text-blue-600 hover:underline">Categorías</Link>
                </li>
                <li>
                    <Link to= "/axios/productos" className="text-blue-600 hover:underline">Productos</Link>
                </li>
            </ul>
        </div>
    )
}

export default AxiosComponent;