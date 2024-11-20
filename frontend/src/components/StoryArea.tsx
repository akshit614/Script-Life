import axios from "axios"
import { SERVER_URL } from "../../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const StoryArea = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

  return (
    <form>
        <div className="flex justify-center pt-10 w-full">
            <div className="w-full mb-4 rounded-lg  max-w-screen-lg">
                <div className="space-y-1 w-full px-2">           
                    <textarea id="message"  rows={1} className="block  font-serif p-2.5 w-full text-5xl text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500 " placeholder="Title"
                    required
                    onChange={(e) => {
                       
                        setTitle(e.target.value)
                    }}></textarea>
                </div>
                
                <div className="px-4 py-2 bg-white rounded-t-lg">
                    <textarea rows={6} className="w-full px-0 font-serif text-xl text-gray-900 bg-white p-2 border rounded-lg pl-3" placeholder="Tell your story" required 
                    onChange={(e) => {
                        
                        setContent(e.target.value)
                    }}></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                    <button onClick={async() => {
                        const res = await axios.post(`${SERVER_URL}/api/v1/blog/new`, 
                            {
                                title,
                                content
                            } , {
                            headers : {
                                Authorization : localStorage.getItem("token")
                            }
                        })
                        console.log(res.data);
                        
                        navigate(`/blog/${res.data.id}`)
                    }} 
                     type="button" className="mx-2 inline-flex items-center py-2.5 px-4 text-sm font-bold text-center text-white bg-blue-800 rounded-full hover:shadow-lg hover:bg-blue-700 hover:shadow-sky-300 focus:ring-4 focus:ring-blue-200">
                        Post Blog
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default StoryArea