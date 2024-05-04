import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../layout/Hero";
import Loader from "../Loader/Loader"
function User() {
     const dispatch=useDispatch();
     const {user,loading,isAuthenticated}=useSelector(state=>state.user);
     const handleUploadFiles = (e) => {
      e.preventDefault(); 
      window.location.href = "/file/uploadFile";
    };
  
    const handleGetFiles = (e) => {
      e.preventDefault();
      window.location.href = "/file/getAllFiles";
    };
  
    
  return (
 <>
 <Hero text="Get User Details"/>
 {loading?<Loader/>:<div class="bg-white py-14 lg:py-20">
        <div class="container">
          <div class="max-w-4xl flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-20">
            <div
              id="profile"
              class="w-auto rounded-lg shadow-2xl bg-white opacity-80 mx-6 lg:mx-0"
            >
              <div class="p-2 md:p-8 text-center lg:text-left">
                <div
                  class="flex justify-start  rounded-full lg:mb-4 shadow-xl mx-auto lg:mx-1 -mt-20 h-48 w-48 bg-cover bg-center"
                                 >
                                    <img src="/Profile.jpeg" alt="" />
                                 </div>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">Hey - {user.name} </h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
             
                <div class="flex-col items-center justify-center lg:justify-start">
                  <p class="pt-5 text-black  md:text-md font-bold text-2xl ">
                    {" "}
                    Email Id
                  </p>
                  <span class=" text-gray-600 text-xl "> {user.email} </span>
                </div>
                <div class="flex-col items-center justify-center lg:justify-start">
                  <p class="pt-6 text-black text-2xl md:text-md font-bold ">
                    {" "}
                    Role
                  </p>
                  <span class="text-gray-600 text-xl">You are a {user.role}</span>
                </div>
                <div class="flex-col items-center justify-center lg:justify-start">
                  <p class="pt-6 text-black text-2xl md:text-md font-bold ">
                    {" "}
                    Updated Details
                  </p>
                  <span class="text-gray-600 text-xl">You updated details at  {user.date?String(user.date).slice(0,10):String(user.createdAt).slice(0,10)}</span>
                </div>

                <p class="my-2 text-md"></p>
                <div class="flex justify-center ">
                  <div class="py-4 pr-5">
                      <button onClick={handleUploadFiles} class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-xl">
                       Upload Files
                      </button>
                  </div>
                  <div class="py-4">
                      <button onClick={handleGetFiles} class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-xl">
                        Get Your Uploaded Files
                      </button>
                  </div>
                </div>
                <p class="text-sm">
                  Need help,feel free to &nbsp; 
                  <a href="#" class="font-bold underline hover:text-green-700">
                 contact us
                  </a>    &nbsp;  
                  or just use the below links
                </p>
                <div class="mt-8 pb-16 lg:pb-0 w-3/5 mx-auto flex flex-wrap items-start  justify-between">
                  <a
                    class="link"
                    href="#"
                    data-tippy-content="@facebook_handle"
                  >
                    <svg
                      class="h-6 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                    </svg>
                  </a>
                  <a class="link" href="#" data-tippy-content="@twitter_handle">
                    <svg
                      class="h-6 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a class="link" href="#" data-tippy-content="@github_handle">
                    <svg
                      class="h-6 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    class="link"
                    href="#"
                    data-tippy-content="@instagram_handle"
                  >
                    <svg
                      class="h-6 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      }
      <div className="h-20"></div>
 </>
  );
}

export default User;
