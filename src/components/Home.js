import React, {useState} from 'react'
import LoadingIcon from './LoadingIcon'
import ShortURL from './ShortURL'

const Home = () => {

    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [resultUrl, setResultUrl] = useState({})
    
    const shortenLink = `https://api.shrtco.de/v2/shorten?url=${url}`


    function validateUrl(){
        if(url.indexOf('http') === 0 || url.indexOf('www.') === 0){
            setError(false)
            return true
        }else{
            setError(true)
            return false
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        setError(false)
        setResultUrl({})
        setLoading(true)
        if(validateUrl()){
            try{
                const response = await fetch(shorternLink)
                const result = await response.json()
                setResultUrl(result)
            }catch{
                setError(true)
            }
        }
        setLoading(false)
    }

    return (
        <div className="p-8 mt-4">
            <h1 className="text-white font-bold text-4xl sm:text-6xl">More than just<span className="bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-transparent mt-3 block font-extrabold">shorter links</span></h1>
            <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col sm:w-4/5 lg:w-3/5 mt-5">
                <input onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Place your link here..." className="px-4 py-2 text-gray-600 outline-none rounded w-full flex-1"/>
                <button type="submit" className="bg-gradient-to-r sm:mt-0 text-center mt-3 sm:ml-3 from-indigo-200 to-indigo-400 text-lg text-white font-bold px-4 py-2 rounded hover:from-indigo-600 hover:to-indigo-700 transition-all flex justify-center">{loading ? <LoadingIcon/>  : 'Shorten it!'}</button>
            </form>
            {
                resultUrl.ok && <ShortURL shortLink={resultUrl.result.full_short_link2}/>
            }
            {
                error && <p className="text-red-400 font-bold text-sm mt-3">Please enter a valid url.</p>
            }
        </div>
    )
}

export default Home