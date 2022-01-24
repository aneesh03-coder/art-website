import React, { useEffect, useRef, useState } from 'react'
import {
    Link,
  } from "react-router-dom";
import '../styles/NavigationBar.css'
import {isMobile,isTablet} from 'react-device-detect'


const NavigationBar = () => {
    const [toggleHamMenu,setToggleHamMenu]=useState(false);
    const [toggleGallMenu,setToggleGallMenu]=useState(false);
    const [toggleCourseMenu,setToggleCourseMenu]=useState(false);  

    const toggleHamburgerMenu=()=>{
        setToggleHamMenu(!toggleHamMenu);       
    }
    const toggleCoursMenu=(e)=>{
           setToggleCourseMenu(!toggleCourseMenu)
       
    }
    const toggleGalleryMenu=(e)=>{
        setToggleGallMenu(!toggleGallMenu) ;        
    }
    
    window.addEventListener('resize',()=>{
        if(window.innerWidth > '1020'){
            setToggleHamMenu(false);
        } 
        
    })

    return (
        <div className='text-white bg-gray-900 px-8 lg:px-8 py-4 h-[93vh] lg:h-[100vh] overflow-hidden '>
        
            <nav className=' flex justify-between items-center relative'>
                <div className='flex z-20'>
                    <h1 className='text-2xl font-serif pb-1'>
                        <Link to="/" className='hover:text-orange-200'>
                            <span className='text-5xl text-orange-200 font-bold'>J</span><span className='text-2xl font-bold'>aya</span> <span className='text-5xl text-orange-200 font-bold'>K</span>
                            <span className='text-2xl font-bold'>alra</span>
                        </Link></h1>                    
                </div>
                {/* <ul className='hidden lg:text-base lg:font-semibold lg:flex uppercase'> */}
                <ul className={`menu ${!toggleHamMenu? 'menu_closed':'open menu_open'}`} id='Menu'>
                    <li className={`menuItem group`}>
                        <div className='menuItem_sub_div'>
                        <Link to="/"><span>Home</span></Link>
                        <div className='pointers group-hover:lg:bg-white'></div>
                        </div>
                    </li>
                    
                   
                    <li className='menuItem group ' onMouseEnter={()=>!isMobile&& !isTablet && toggleGalleryMenu()} onMouseLeave={()=>!isMobile&& !isTablet && toggleGalleryMenu()} >
                        <div className='flex justify-center relative menuItem_sub_div'  onClick={(e)=>{
                            e.preventDefault();
                            toggleGalleryMenu(e)} } >
                            <Link to="/"><span>Gallery</span></Link>
                            <div className={`absolute left-[90%] lg:hidden transition ease-in-out duration-1000 ${!toggleGallMenu ? 'rotate-0':' rotate-90'}`} > 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                             </div>
                        </div>
                        <div className='pointers group-hover:lg:bg-white'></div>
                        
                        <ul className={`submenu ${!toggleGallMenu ? '':'submenu_active'}`} id='sub__menu1'>
                        <li className='submenu__items'>
                                <div className='menuItem_sub_div'>
                                    <Link to="/"><span>Holistic Healing Paradise</span></Link>
                                 </div>
                            </li>
                            <li className='submenu__items'>
                                <div className='menuItem_sub_div'>
                                    <Link to="/"><span>Jharokha Art Institution</span></Link>
                                 </div>
                            </li>
                            <li className='submenu__items'>
                                <div className='menuItem_sub_div'>
                                    <Link to="/"><span>Chrysalis</span></Link>
                                 </div>
                            </li>
                            
                            
                        </ul>                      
                    </li>
                    <li className='menuItem group' onMouseEnter={()=>!isMobile && !isTablet && toggleCoursMenu()} onMouseLeave={()=>!isMobile&& !isTablet && toggleCoursMenu()} >
                    <div className='flex justify-center relative menuItem_sub_div'  onClick={(e)=>{
                        e.preventDefault();
                        toggleCoursMenu(e)}}>
                        <Link to="/"><span>Courses</span></Link>
                        <div className={`absolute left-[90%] lg:hidden transition ease-in-out duration-1000 ${!toggleCourseMenu ? 'rotate-0':' rotate-90'}`} > 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                         </div>
                    </div>
                        <div className='pointers group-hover:lg:bg-white'></div>
                        <ul className={`submenu ${!toggleCourseMenu ? '': 'submenu_active'}`} id='sub__menu2'>
                            <li className='submenu__items'>
                                <div className='menuItem_sub_div'>
                                    <Link to="/"><span>Welness</span></Link>
                                 </div>
                            </li>
                            
                            <li className='submenu__items'>
                                <div className='menuItem_sub_div'>
                                    <Link to="/"><span>Art</span></Link>
                                 </div>
                            </li>
                            <li className='submenu__items'>
                                <div className='menuItem_sub_div'>
                                    <Link to="/"><span>Teaching</span></Link>
                                 </div>
                            </li>
                        </ul>   
                    </li>
                    
                    
                  
                    <li className='menuItem group'>
                    <div className='menuItem_sub_div'>
                        <Link to="/"><span>About me</span></Link>
                        <div className='pointers group-hover:lg:bg-white'></div>
                    </div>
                    </li>
                    <li className='menuItem group'>
                    <div className='menuItem_sub_div'>
                        <Link to="/"><span>Contact Us</span></Link>
                        <div className='pointers group-hover:lg:bg-white'></div>
                    </div>
                    </li>
                    <div className='auth1'>
                    <div  className={`btn ${!toggleHamMenu? 'menu_closed1':'open menu_open1'}`}>
                    <div className='hover:transition ease-in-out duration-300 hover:-translate-y-[3px]'>
                         
                        <Link  to='/'>Login</Link></div>
                        </div>
                        <div className={`btn ${!toggleHamMenu? 'menu_closed2':'open menu_open2'}`}>
                        <div className=' hover:transition linear  hover:-translate-y-[3px]'>
                         <Link  to='/'>Sign up</Link></div>  </div>            
                    </div>
                </ul>                
            
        
            <div className='auth'>
                <div  className={`btn`}> <Link  to='/'>Login</Link></div>
                <div className={`btn `}> <Link  to='/'>Sign up</Link></div>              
            </div>

            <div className={`burgerMenu`}  onClick={()=>toggleHamburgerMenu()}>                     
                <div className={`burgerLines ${toggleHamMenu? 'invisible':'burgerAnimation'}`} id='burger1'></div>                
                <div className={`burgerLines ${toggleHamMenu? 'invisible':''}`} id='burger2'></div>
                <div className='relative'>
                    <div className={`burgerLine2a ${toggleHamMenu? 'cancel1':''}`}   id='cancel1'></div>
                    <div className={`burgerLine2b ${toggleHamMenu? 'cancel2':''}`} id='cancel2'></div>
                </div>
                <div className={`burgerLines ${toggleHamMenu? 'invisible':'burgerAnimation'}`} id='burger3'></div>
            </div>
            </nav>
        </div>
        
    )
}

export default NavigationBar
