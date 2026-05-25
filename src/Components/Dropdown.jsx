import React from 'react'
import { useState, useEffect } from 'react'


const Dropdown = ({tags, domain, setTags, setDomain, filter}) => {

    const [blogFile, setBlogFile] = useState([])
    const [tagsFile, setTagsFile] = useState([])
    const [domainFile, setDomainFile] = useState([])

    // Loading data
    useEffect(()=>{
        const getBlogData = async () => {
            const file = await fetch('http://localhost:3000/posts');
            const jsonFile = await file.json()
            let a = [], b = [];
            jsonFile.map((obj) => {
                a.push(obj.domain)
                obj.tags.map(tag=>{b.push(tag)})
            })
            const setA = new Set(a)
            const setB = new Set(b)
            const arrayA = [...setA]
            const arrayB = [...setB]

            setDomainFile(arrayA)
            setTagsFile(arrayB)

        }

        getBlogData()
    }, [])


    const domainAppender = (e) => {
        const check = e.target.checked

        if(check){
            const newDomain = [...domain, e.target.id]
            setDomain(newDomain)
        }
        else{
            const index = domain.indexOf(e.target.id)
            const newDomain = domain.splice(index,1)
            setDomain(domain)
        }
    }

    const tagsAppender = (e) => {
        const check = e.target.checked

        if(check){
            const newTag = [...tags, e.target.id]
            setTags(newTag)
        }
        else{
            const index = tags.indexOf(e.target.id)
            const newTags = tags.splice(index,1)
            setTags(tags)

        }
        //console.log(tags)
    }

  return (
    <>
        <div
        className={`flex flex-col absolute right-0 top-15 bg-[#1A1A1A] p-4 rounded-lg ${filter ? '' : 'hidden'} `}>
            <span
            className='text-red-500 font-bold text-xl'>
                Domain
            </span>

            {domainFile.map((d)=> {
                return (
                    <>
                    <div
                    className='flex gap-4'>
                        <input 
                        key={d}
                        id = {`${d}`}
                        type="checkbox"
                        onChange={(e)=>{domainAppender(e)}}
                        className='accent-red-500' />
                        <label>{d}</label>
                    </div>
                    </>
                )
            })}


            <span
            className='text-red-500 font-bold text-xl mt-5'>
                Tags
            </span>

            {tagsFile.map((d)=> {
                return (
                    <>
                    <div
                    className='flex gap-4'>
                        <input 
                        key={d}
                        id = {`${d}`}
                        type="checkbox"
                        onChange={(e)=>{tagsAppender(e)}}
                        className='accent-red-500' />
                        <label>{d}</label>
                    </div>
                    </>
                )
            })}

        </div>
    </>
  )
}

export default Dropdown
