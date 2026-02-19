import fs from 'fs/promises'
import path from 'path'
import AI from './AIconfig'
import pdf from 'pdf-parse'

export const get1 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(targetp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 


export const get2 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'second-part-2b-reflection-essay-and-link-to-map-1-1.pdf')
        const data2 = await fs.readFile(targetp)
        const dataB2 = await pdf(data2)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB2.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 


export const get3 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format mod 3 (3).pdf')
        const data3 = await fs.readFile(targetp)
        const dataB3 = await pdf(data3)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB3.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const get4 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format mod 4 (4).pdf')
        const data4 = await fs.readFile(targetp)
        const dataB4 = await pdf(data4)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB4.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const get5 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'part a mod 5 and one page reflection (1).pdf')
        const data5 = await fs.readFile(targetp)
        const dataB5 = await pdf(data5)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB5.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const get6 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format (6) (1).pdf')
        const data6 = await fs.readFile(targetp)
        const dataB6 = await pdf(data6)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB6.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const get7 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(targetp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const get8 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(targetp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const get9 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const targetp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(targetp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 
