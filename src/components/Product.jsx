import { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactPlayer from "react-player";
import Navigators from './Navigators'
import { SiBmcsoftware } from 'react-icons/si'
import { VscLocation } from 'react-icons/vsc'
import Technology from '../assets/icons/inno_dev-4.png'
import Clock from '../assets/icons/inno_clock.png'
import Business from '../assets/icons/inno_strategy.png'
import Investments from '../assets/icons/inno_investor.png'
import axios from "axios";
import { Navigate } from "react-router";

function Product({ config, product, user, edit }) {
    const [TRLs, setTRLs] = useState(null);
    useEffect(() => {
        axios.get('https://api-test.innoloft.com/trl/').then(res => {
            setTRLs(res.data)
        })
    }, [])

    const [name, setName] = useState(product?.name);
    const [description, setDescription] = useState(product?.description);
    const [video, setVideo] = useState(product?.video);
    const [categories, setCategories] = useState([
        {
            "id": 5101,
            "name": "IT platforms"
        },
        {
            "id": 5100,
            "name": "B2B marketplaces"
        }
    ]);
    const [TRL, setTRL] = useState(product?.trl);
    const [businessModels, setBusinessModels] = useState(product?.businessModels);
    const [investmentEffort, setInvestmentEffort] = useState(product?.investmentEffort);


    const updateNestedValue = (value, id, key, setType, type) => {
        categories[key]['name'] = value;
        console.log(categories)
    }

    const updateProduct = (e) =>{
        e.preventDefault();
        axios
            .put(`${baseURL}/product/6781`, {name, description, video, categories, trl:TRL, businessModels, investmentEffort})
            .then((response) => {
                Navigate('/product');
            })
    }

    return (
        <form onSubmit={updateProduct}>
            <div className={`-mt-8`} style={{ color: `${config?.mainColor}`}}>
                <Navigators product={product} config={config} edit={edit} />
                <div className="my-3 lg:flex">
                    <div className="rounded-md lg:rounded-tr-none rounded-br-none rounded-bl-none lg:rounded-bl-md border-b-0 lg:border-b-[0.1rem] lg:border-r-0 product_container lg:w-[55%]">
                        <div className="relative">
                            <div className={`text-white p-1 absolute top-0 rounded-tl-md text-sm left-0 flex items-center`} style={{ backgroundColor: `${config?.mainColor}`}}>
                                <SiBmcsoftware className="text-3xl p-2" />
                                <span className="pr-1">{product?.type.name}</span>
                            </div>
                            <div className="flex justify-center">
                                <img src={product?.picture} alt="Product" className=" h-[20rem]" />
                            </div>
                        </div>
                        <div className="border-t-[0.1rem] border-[#E5E7EB] px-5 py-6">
                            {edit ? (
                                <input className="input p-2" type="text" value={name || product?.name} onChange={(e) => setName(e.target.value)} />
                            ) : (
                                <h1 className="font-semibold">{product?.name}</h1>
                            )}
                            {edit ? (
                                <div className="mt-4">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={product?.description}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data)
                                        }}
                                    />
                                </div>
                            ) : (
                                <p className="text-sm text-primary_regular">{product?.description}</p>
                            )}
                        </div>

                    </div>
                    <div className="rounded-md rounded-tl-none lg:rounded-bl-none rounded-tr-none lg:rounded-tr-md border-t-0 lg:border-t-[0.1rem] product_container lg:w-[45%] p-6">
                        <p className="text-sm font-bold">Offered By</p>
                        <img src="https://img.innoloft.com/logo.svg" alt="Innoloft Logo" className="w-40 mt-4" />
                        <div className="mt-4 flex items-center gap-2">
                            <img src={user?.profilePicture} className="w-12 h-12 rounded-full" alt="" />
                            <div>
                                <h1 className="font-semibold text-primary_bold">{user?.firstName} {user?.lastName}</h1>
                                <p className="text-primary_regular font-[400] text-sm">{product?.company.name}</p>
                            </div>
                        </div>
                        <div className="mt-8 text-sm">
                            <div>
                                <div className="flex">
                                    <VscLocation className="text-2xl" />
                                    <span>{product?.company.address.street} {product?.company.address.house},</span>
                                </div>
                                <p className="ml-6">{product?.company.address.zipCode} {product?.company.address.city.name}, {product?.company.address.country.name}</p>
                            </div>
                            {edit ? '' : (
                                <div className="mt-3">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2522.775648019116!2d6.0977920759231505!3d50.77973236360116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ2JzQ3LjAiTiA2wrAwNicwMS4zIkU!5e0!3m2!1sen!2sng!4v1690554278285!5m2!1sen!2sng" className="border-none w-full h-[20rem]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-5 my-6 product_container">
                    <h1 className="font-bold text-sm">Video</h1>
                    {edit ? (
                        <div className="mt-4">
                            <input type="text" placeholder="Add a youtube or video link" className="p-3 input" value={video || product?.video} onChange={(e) => setVideo(e.target.value)} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center mt-3">
                            <ReactPlayer url={product?.video} />
                        </div>
                    )}
                </div>

                <div className="p-5 my-6 product_container text-sm">
                    <h1 className="font-bold">Offer details</h1>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-primary_regular mt-4">
                        <div className="flex gap-2">
                            <div>
                                <img src={Technology} alt="" />
                            </div>
                            <div>
                                <h1>Categories</h1>
                                <div className="mt-2 flex flex-wrap items-center gap-1">
                                    {edit ? categories.map((category, key) => (
                                        <input
                                            type="text"
                                            key={key}
                                            className="input p-2"
                                            // value={category.name}
                                            onChange={(e) => updateNestedValue(e.target.value, category.id, key, setCategories, categories)} />
                                    ))
                                    : product?.categories.map((category, key) => (
                                        <span key={key} className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{category.name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <img src={Business} alt="" />
                            </div>
                            <div>
                                <h1>Business Model</h1>
                                <div className="mt-2 flex flex-wrap items-center gap-1">
                                    {edit ? businessModels || product?.businessModels.map((model, key) => (
                                        <input 
                                            type="text" 
                                            key={key} 
                                            className="input p-2" 
                                            value={model.name} 
                                            onChange={(e) => updateNestedValue(e.target.value, model.id, setBusinessModels, businessModels)} />
                                    )) : product?.businessModels.map((model, key) => (
                                        <span key={key} className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{model.name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <img src={Clock} alt="" />
                            </div>
                            <div>
                                <h1>TRL</h1>
                                <div className="mt-2 flex flex-wrap items-center gap-1">
                                    {edit ? (
                                        <select className="input p-2" onChange={(e) => setTRL({ id: e.target.trl_id, name: e.target.value })}>
                                            {TRLs && TRLs.map((trl, key) => (
                                                <option key={key} value={trl.name} trl_id={trl.id} selected={product?.trl.id == key + 1 ? true : false}>{trl.name}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <span className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{product?.trl.name}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <img src={Investments} alt="" />
                            </div>
                            <div>
                                <h1>Costs</h1>
                                <div className="mt-2 flex flex-wrap items-center gap-1">
                                    {edit ? (
                                        <input type="text" className="input p-2 w-full" value={investmentEffort || product?.investmentEffort} onChange={(e) => setInvestmentEffort(e.target.value)} />
                                    ) : (
                                        <span className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{product?.investmentEffort}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {edit ? (
                    <div className="flex justify-end">
                        <button type="submit" className="text-white px-3 py-2 rounded-md" style={{ backgroundColor: `${config?.mainColor}`}}>Save</button>
                    </div>
                ) : ''}
            </div>
        </form>
    )
}

export default Product; 