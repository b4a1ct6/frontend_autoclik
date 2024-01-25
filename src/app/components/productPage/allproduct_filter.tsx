// import { product_filter } from "@/app/store/slices/productSlice";
import { fetchProduct_brandsFilter, fetchProduct_TirediameterFilter, fetchProduct_TiretypeFilter, fetchProduct_TirewidthFilter, fetchProduct_TireratioFilter, fetchProduct_LubeOil_fluid_typeFilter, fetchProduct_LubeOil_engineOil_typesofengineoilFilter, fetchProduct_ShockAbsorber_shockuptype, fetchProduct_Brake_braketype, fetchProduct_Battery_amp } from "@/app/store/slices/product_filterSlice";
import { Box, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { fetchProducts, fetchProductsOfTypes } from "@/app/store/slices/productSlice";
import Divider from "@mui/joy/Divider";
import { motion } from "framer-motion";

export default function allproduct_filter(){

  const font = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });
  
    const dispatch = useDispatch<any>();
    const [Types, setTypes] = useState([])

    const [tireBrand, setTireBrand] = useState([])
    const [tireDiameter, setTireDiameter] = useState([])  
    const [tireWidth, setTireWidth] = useState([])  
    const [tireRatio, setTireRatio] = useState([])
    
    const [lubeOil_Brand, setLubeOil_Brand] = useState([])
    const [lubeOil_fluid_type, setLubeOil_fluid_type] = useState([])
    const [lubeOil_engineOil_typesofengineoil, setLubeOil_engineOil_typesofengineoil] = useState([])

    const [shockAbsorber_Brand, setShockAbsorber_Brand] = useState([])
    const [shockAbsorber_Shockuptype, setShockAbsorber_Shockuptype] = useState([])

    const [brake_brands, setBrake_brands] = useState([])
    const [brake_braketype, setBrake_braketype] = useState([])
    
    const [battery_brands, setBattery_brands] = useState([])
    const [battery_amp, setBattery_amp] = useState([])

    const [otherproduct_brands, setOtherproduct_brands] = useState([])

    const [checkedTypes, setCheckedTypes] = useState<string[]>(() => {
      // Check if localStorage is available before using it
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedTypes = localStorage.getItem('checkedTypes');
        return storedTypes ? JSON.parse(storedTypes) : [];
      } else {
        return [];
      }
    });

      const [checkedTireBrands, setCheckedTireBrands] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedTireBrands = localStorage.getItem('checkedTireBrands');
          return storedTireBrands ? JSON.parse(storedTireBrands) : [];
        } else {
          return [];
        }
      });

      const [checkedTireDiameter, setCheckedTireDiameter] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedTireDiameter = localStorage.getItem('checkedTireDiameter');
          return storedTireDiameter ? JSON.parse(storedTireDiameter) : [];
        } else {
          return [];
        }
      });

      const [checkedTireWidth, setCheckedTireWidth] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedTireWidth = localStorage.getItem('checkedTireWidth');
          return storedTireWidth ? JSON.parse(storedTireWidth) : [];
        } else {
          return [];
        }
      });

      const [checkedTireRatio, setCheckedTireRatio] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedTireRatio = localStorage.getItem('checkedTireRatio');
          return storedTireRatio ? JSON.parse(storedTireRatio) : [];
        } else {
          return [];
        }
      });

      const [checkedLubeOilBrand, setCheckedLubeOilBrand] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedLubeOil_Brand = localStorage.getItem('checkedLubeOil_Brand');
          return storedLubeOil_Brand ? JSON.parse(storedLubeOil_Brand) : [];
        } else {
          return [];
        }
      });

      const [checkedLubeOilFluid_type, setCheckedLubeOilFluid_type] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedLubeOil_Fluid_type = localStorage.getItem('checkedLubeOil_Fluid_type');
          return storedLubeOil_Fluid_type ? JSON.parse(storedLubeOil_Fluid_type) : [];
        } else {
          return [];
        }
      });

      const [checkedLubeOil_engineOil_typesofengineoil, setcheckedLubeOil_engineOil_typesofengineoil] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedLubeOil_engineOil_typesofengineoil = localStorage.getItem('checkedLubeOil_engineOil_Typesofengineoil');
          return storedLubeOil_engineOil_typesofengineoil ? JSON.parse(storedLubeOil_engineOil_typesofengineoil) : [];
        } else {
          return [];
        }
      });

      const [checkedShockAbsorberBrands, setcheckedShockAbsorberBrands] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedShockAbsorberBrands = localStorage.getItem('checkedShockAbsorberBrands');
          return storedShockAbsorberBrands ? JSON.parse(storedShockAbsorberBrands) : [];
        } else {
          return [];
        }
      });

      const [checkedShockAbsorberShockuptype, setcheckedShockAbsorberShockuptype] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedShockAbsorberShockuptype = localStorage.getItem('checkedShockAbsorberShockuptype');
          return storedShockAbsorberShockuptype ? JSON.parse(storedShockAbsorberShockuptype) : [];
        } else {
          return [];
        }
      });

      const [checkedBrakeBrands, setcheckedBrakeBrands] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedBrakeBrands = localStorage.getItem('checkedBrakeBrands');
          return storedBrakeBrands ? JSON.parse(storedBrakeBrands) : [];
        } else {
          return [];
        }
      });

      const [checkedBrakeBraketype, setcheckedBrakeBraketype] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedBrakeBraketype = localStorage.getItem('checkedBrakeBraketype');
          return storedBrakeBraketype ? JSON.parse(storedBrakeBraketype) : [];
        } else {
          return [];
        }
      });

      const [checkedBatteryBrands, setcheckedBatteryBrands] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedBatteryBrands = localStorage.getItem('checkedBatteryBrands');
          return storedBatteryBrands ? JSON.parse(storedBatteryBrands) : [];
        } else {
          return [];
        }
      });

      const [checkedBatteryAmp, setcheckedBatteryAmp] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedBatteryAmp = localStorage.getItem('checkedBatteryAmp');
          return storedBatteryAmp ? JSON.parse(storedBatteryAmp) : [];
        } else {
          return [];
        }
      });

      const [checkedOtherproduct_brands, setCheckedOtherproduct_brands] = useState<string[]>(() => {
        // Check if localStorage is available before using it
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedOtherproduct_brands = localStorage.getItem('checkedOtherproductBrands');
          return storedOtherproduct_brands ? JSON.parse(storedOtherproduct_brands) : [];
        } else {
          return [];
        }
      });

      const [subTires_brand_fIlter,setSubTires_brand_filter] = useState(false)
      const [subTires_diameter_fIlter,setSubTires_diameter_filter] = useState(false)
      const [subTires_width_fIlter,setSubTires_width_filter] = useState(false)
      const [subTires_ratio_fIlter,setSubTires_ratio_filter] = useState(false)

      const [subLubeOil_brand_fIlter,setSubLubeOil_brand_filter] = useState(false)
      const [subLubeOil_fluid_type_fIlter,setSubLubeOil_fluid_type_filter] = useState(false)
      const [subLubeOil_engineOil_typesofengineoil_fIlter,setSubLubeOil_engineOil_typesofengineoil_filter] = useState(false)

      const [subShockAbsorber_brand_fIlter,setSubShockAbsorber_brand_fIlter] = useState(false)
      const [subShockAbsorber_shockuptype_fIlter,setsubShockAbsorber_shockuptype_fIlter] = useState(false)

      const [subBrake_brand_fIlter,setSubBrake_brand_fIlter] = useState(false)
      const [subBrake_braketype_fIlter,setSubBrake_braketype_fIlter] = useState(false)

      const [subBattery_brand_fIlter, setSubBattery_brand_fIlter] = useState(false)
      const [subBattery_amp_fIlter, setSubBattery_amp_fIlter] = useState(false)

      const [subOtherproduct_brands, setSubOtherproduct_brands_fIlter] = useState(false)
      
      const handleChangeChkTypes = async (event: React.ChangeEvent<HTMLInputElement>, type_name: string) => {
        const isChecked = event.target.checked;

        if (isChecked) {
          // เมื่อ checkbox ถูกติ๊กใหม่
          setCheckedTypes([type_name]); // เซ็ต checkedTypes เป็น type_name เดียว
        } else {
          // เมื่อ checkbox ถูกยกเลิก
          setCheckedTypes([]); // เซ็ต checkedTypes เป็นรายการว่าง
        }
      
        // ตรวจสอบทุก checkbox ที่ไม่ใช่ checkbox ที่ถูกติ๊กใหม่เพื่อปิดการเลือก
        Types.forEach((row: any) => {
          const otherTypeName = row.attributes.type_name;
          if (otherTypeName !== type_name) {
            const otherCheckbox = document.getElementById(otherTypeName) as HTMLInputElement;
            if (otherCheckbox) {
              otherCheckbox.checked = false;
            }
          }
        });
      };

      const handleChangeChkTireBrands = async (event: React.ChangeEvent<HTMLInputElement>, tire_brand_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedTireBrands([...checkedTireBrands, tire_brand_name]);
          } else {
            setCheckedTireBrands((prevCheckedTireBrands) => prevCheckedTireBrands.filter((name) => name !== tire_brand_name));
          }
      };

      const handleChangeChkTireDiameter = async (event: React.ChangeEvent<HTMLInputElement>, tire_diameter_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedTireDiameter([...checkedTireDiameter, tire_diameter_name]);
          } else {
            setCheckedTireDiameter((prevCheckedTireDiameter) => prevCheckedTireDiameter.filter((name) => name !== tire_diameter_name));
          }
      };

      const handleChangeChkTireWidth = async (event: React.ChangeEvent<HTMLInputElement>, tire_width_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedTireWidth([...checkedTireWidth, tire_width_name]);
          } else {
            setCheckedTireWidth((prevCheckedTireWidth) => prevCheckedTireWidth.filter((name) => name !== tire_width_name));
          }
      };

      const handleChangeChkTireRatio = async (event: React.ChangeEvent<HTMLInputElement>, tire_ratio_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedTireRatio([...checkedTireRatio, tire_ratio_name]);
          } else {
            setCheckedTireRatio((prevCheckedTireRatio) => prevCheckedTireRatio.filter((name) => name !== tire_ratio_name));
          }
      };

      const handleChangeChkLubeOil_Brand = async (event: React.ChangeEvent<HTMLInputElement>, lubeOil_brand_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedLubeOilBrand([...checkedLubeOilBrand, lubeOil_brand_name]);
          } else {
            setCheckedLubeOilBrand((prevCheckedLubeOil_Brand) => prevCheckedLubeOil_Brand.filter((name) => name !== lubeOil_brand_name));
          }
      };

      const handleChangeChkLubeOil_Fluid_type = async (event: React.ChangeEvent<HTMLInputElement>, lubeOil_fluid_type_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedLubeOilFluid_type([...checkedLubeOilFluid_type, lubeOil_fluid_type_name]);
          } else {
            setCheckedLubeOilFluid_type((prevCheckedEngineOil_Fluid_type: any[]) => prevCheckedEngineOil_Fluid_type.filter((name) => name !== lubeOil_fluid_type_name));
          }
      };

      const handleChangeChkLubeOil_engineOil_typesofengineoil = async (event: React.ChangeEvent<HTMLInputElement>, lubeOil_engineOil_typesofengineoil_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedLubeOil_engineOil_typesofengineoil([...checkedLubeOil_engineOil_typesofengineoil, lubeOil_engineOil_typesofengineoil_name]);
          } else {
            setcheckedLubeOil_engineOil_typesofengineoil((prevCheckedEngineOil_engineOil_typesofengineoil: any[]) => prevCheckedEngineOil_engineOil_typesofengineoil.filter((name) => name !== lubeOil_engineOil_typesofengineoil_name));
          }
      };

      const handleChangeChkShockAbsorberBrands = async (event: React.ChangeEvent<HTMLInputElement>, shockAbsorber_brand_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedShockAbsorberBrands([...checkedShockAbsorberBrands, shockAbsorber_brand_name]);
          } else {
            setcheckedShockAbsorberBrands((prevCheckedShockAbsorberBrands) => prevCheckedShockAbsorberBrands.filter((name) => name !== shockAbsorber_brand_name));
          }
      };

      const handleChangeChkShockAbsorberShockuptype = async (event: React.ChangeEvent<HTMLInputElement>, shockAbsorber_shockuptype_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedShockAbsorberShockuptype([...checkedShockAbsorberShockuptype, shockAbsorber_shockuptype_name]);
          } else {
            setcheckedShockAbsorberShockuptype((prevCheckedShockAbsorberShockuptype) => prevCheckedShockAbsorberShockuptype.filter((name) => name !== shockAbsorber_shockuptype_name));
          }
      };

      const handleChangeChkBrakeBrands = async (event: React.ChangeEvent<HTMLInputElement>, brake_brand_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedBrakeBrands([...checkedBrakeBrands, brake_brand_name]);
          } else {
            setcheckedBrakeBrands((prevCheckedBrakeBrands) => prevCheckedBrakeBrands.filter((name) => name !== brake_brand_name));
          }
      };

      const handleChangeChkBrakeBraketype = async (event: React.ChangeEvent<HTMLInputElement>, brake_braketype_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedBrakeBraketype([...checkedBrakeBraketype, brake_braketype_name]);
          } else {
            setcheckedBrakeBraketype((prevCheckedBrakeBraketype) => prevCheckedBrakeBraketype.filter((name) => name !== brake_braketype_name));
          }
      };

      const handleChangeChkBatteryBrands = async (event: React.ChangeEvent<HTMLInputElement>, battery_brand_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedBatteryBrands([...checkedBatteryBrands, battery_brand_name]);
          } else {
            setcheckedBatteryBrands((prevCheckedBatteryBrands) => prevCheckedBatteryBrands.filter((name) => name !== battery_brand_name));
          }
      };

      const handleChangeChkBatteryAmp = async (event: React.ChangeEvent<HTMLInputElement>, battery_amp_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setcheckedBatteryAmp([...checkedBatteryAmp, battery_amp_name]);
          } else {
            setcheckedBatteryAmp((prevCheckedBatteryAmp) => prevCheckedBatteryAmp.filter((name) => name !== battery_amp_name));
          }
      };

      const handleChangeChkOtherproduct_brands = async (event: React.ChangeEvent<HTMLInputElement>, otherproduct_brands_name: string) => {
        const isChecked = event.target.checked;

          if (isChecked) {
            setCheckedOtherproduct_brands([...checkedOtherproduct_brands, otherproduct_brands_name]);
          } else {
            setCheckedOtherproduct_brands((prevCheckedOtherproduct_brands) => prevCheckedOtherproduct_brands.filter((name) => name !== otherproduct_brands_name));
          }
      };

      useEffect(() => {
        dispatch(fetchProductsOfTypes(checkedTypes))
        dispatch(fetchProducts())
        // Save to local storage whenever checkedBrands changes
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('checkedTypes', JSON.stringify(checkedTypes));

          localStorage.setItem('checkedTireBrands', JSON.stringify(checkedTireBrands));
          localStorage.setItem('checkedTireDiameter', JSON.stringify(checkedTireDiameter));
          localStorage.setItem('checkedTireWidth', JSON.stringify(checkedTireWidth));
          localStorage.setItem('checkedTireRatio', JSON.stringify(checkedTireRatio));

          localStorage.setItem('checkedLubeOil_Brand', JSON.stringify(checkedLubeOilBrand));
          localStorage.setItem('checkedLubeOil_Fluid_type', JSON.stringify(checkedLubeOilFluid_type));
          localStorage.setItem('checkedLubeOil_engineOil_Typesofengineoil', JSON.stringify(checkedLubeOil_engineOil_typesofengineoil));

          localStorage.setItem('checkedShockAbsorberBrands', JSON.stringify(checkedShockAbsorberBrands));
          localStorage.setItem('checkedShockAbsorberShockuptype', JSON.stringify(checkedShockAbsorberShockuptype));

          localStorage.setItem('checkedBrakeBrands', JSON.stringify(checkedBrakeBrands));
          localStorage.setItem('checkedBrakeBraketype', JSON.stringify(checkedBrakeBraketype));

          localStorage.setItem('checkedBatteryBrands', JSON.stringify(checkedBatteryBrands));
          localStorage.setItem('checkedBatteryAmp', JSON.stringify(checkedBatteryAmp));

          localStorage.setItem('checkedOtherproductBrands', JSON.stringify(checkedOtherproduct_brands));
        }

        if (!checkedTypes.includes('tire')) {
          localStorage.removeItem('checkedTireBrands')
          localStorage.removeItem('checkedTireDiameter')
          localStorage.removeItem('checkedTireWidth')
          localStorage.removeItem('checkedTireRatio')
        }

        if(checkedTypes.includes('tire')){
          setSubTires_brand_filter(true)
          setSubTires_diameter_filter(true)
          setSubTires_width_filter(true)
          setSubTires_ratio_filter(true)
        }else{
          setSubTires_brand_filter(false)
          setSubTires_diameter_filter(false)
          setSubTires_width_filter(false)
          setSubTires_ratio_filter(false)
        }

        if(!checkedTypes.includes('lube_oil')){
          localStorage.removeItem('checkedLubeOil_Brand')
          localStorage.removeItem('checkedLubeOil_Fluid_type')
          localStorage.removeItem('checkedLubeOil_engineOil_Typesofengineoil')
        }

        if(checkedTypes.includes('lube_oil')){
          setSubLubeOil_brand_filter(true)
          setSubLubeOil_fluid_type_filter(true)
          setSubLubeOil_engineOil_typesofengineoil_filter(true)
        }else{
          setSubLubeOil_brand_filter(false)
          setSubLubeOil_fluid_type_filter(false)
          setSubLubeOil_engineOil_typesofengineoil_filter(false)
        }

        if(!checkedTypes.includes('shock_absorber')){
          localStorage.removeItem('checkedShockAbsorberBrands')
          localStorage.removeItem('checkedShockAbsorberShockuptype')
        }

        if(checkedTypes.includes('shock_absorber')){
          setSubShockAbsorber_brand_fIlter(true)
          setsubShockAbsorber_shockuptype_fIlter(true)
        }else{
          setSubShockAbsorber_brand_fIlter(false)
          setsubShockAbsorber_shockuptype_fIlter(false)
        }

        if(!checkedTypes.includes('brake')){
          localStorage.removeItem('checkedBrakeBrands')
          localStorage.removeItem('checkedBrakeBraketype')
        }

        if(checkedTypes.includes('brake')){
          setSubBrake_brand_fIlter(true)
          setSubBrake_braketype_fIlter(true)
        }else{
          setSubBrake_brand_fIlter(false)
          setSubBrake_braketype_fIlter(false)
        }

        if(!checkedTypes.includes('battery')){
          localStorage.removeItem('checkedBatteryBrands')
          localStorage.removeItem('checkedBatteryAmp')
        }

        if(checkedTypes.includes('battery')){
          setSubBattery_brand_fIlter(true)
          setSubBattery_amp_fIlter(true)
        }else{
          setSubBattery_brand_fIlter(false)
          setSubBattery_amp_fIlter(false)
        }

        if(!checkedTypes.includes('other_product')){
          localStorage.removeItem('checkedOtherproductBrands')
        }

        if(checkedTypes.includes('other_product')){
          setSubOtherproduct_brands_fIlter(true)
        }else{
          setSubOtherproduct_brands_fIlter(false)
        }

      }, [dispatch, checkedTireBrands, checkedTypes, checkedTireDiameter, checkedTireWidth, checkedTireRatio, checkedLubeOilBrand, 
        checkedLubeOilFluid_type, checkedLubeOil_engineOil_typesofengineoil, checkedShockAbsorberBrands, checkedShockAbsorberShockuptype, 
        checkedBrakeBrands, checkedBrakeBraketype, checkedBatteryBrands, checkedBatteryAmp, checkedOtherproduct_brands]);

    
      useEffect(() => {
        dispatch(fetchProduct_brandsFilter('tire')).then(async (res: any) => {
          const response = await res.payload.data;
          setTireBrand(response);
        });
        dispatch(fetchProduct_TirediameterFilter()).then(async (res:any) =>{
          const response = await res.payload.data;
          setTireDiameter(response);
        })
        dispatch(fetchProduct_TiretypeFilter()).then(async (res:any) =>{
          const response = await res.payload.data;
          setTypes(response);
        })
        dispatch(fetchProduct_TirewidthFilter()).then(async (res:any) =>{
          const response = await res.payload.data;
          setTireWidth(response);
        })
        dispatch(fetchProduct_TireratioFilter()).then(async (res:any) =>{
          const response = await res.payload.data;
          setTireRatio(response)
        })
        dispatch(fetchProduct_brandsFilter('lube_oil')).then(async (res:any) =>{
          const response = await res.payload.data;
          setLubeOil_Brand(response)
        })
        dispatch(fetchProduct_LubeOil_fluid_typeFilter()).then(async (res:any) =>{
          const response = await res.payload.data
          setLubeOil_fluid_type(response)
        })
        dispatch(fetchProduct_LubeOil_engineOil_typesofengineoilFilter()).then(async (res:any) =>{
          const response = await res.payload.data
          setLubeOil_engineOil_typesofengineoil(response)
        })
        dispatch(fetchProduct_brandsFilter('shock_absorber')).then(async (res:any) =>{
          const response = await res.payload.data;
          setShockAbsorber_Brand(response)
        })
        dispatch(fetchProduct_ShockAbsorber_shockuptype()).then(async (res:any) =>{
          const response = await res.payload.data;
          setShockAbsorber_Shockuptype(response)
        })
        dispatch(fetchProduct_brandsFilter('brake')).then(async (res:any) =>{
          const response = await res.payload.data;
          setBrake_brands(response)
        })
        dispatch(fetchProduct_Brake_braketype()).then(async (res:any) =>{
          const response = await res.payload.data;
          setBrake_braketype(response)
        })
        dispatch(fetchProduct_brandsFilter('battery')).then(async (res:any) =>{
          const response = await res.payload.data;
          setBattery_brands(response)
        })
        dispatch(fetchProduct_Battery_amp()).then(async (res:any) =>{
          const response = await res.payload.data;
          setBattery_amp(response)
        })
        dispatch(fetchProduct_brandsFilter('other_product')).then(async (res:any) =>{
          const response = await res.payload.data;
          setOtherproduct_brands(response)
        })
        
      }, [dispatch]);


    return(
        <React.Fragment>
            <CssBaseline />
            
            <Box sx={{}}>
            <Grid item xs={12} sx={{ m:2}}>
                <ThemeProvider theme={font}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    FILTER
                  </Typography>
                  <Box sx={{ m: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      VEHICLE
                    </Typography>
                  </Box>
                  </ThemeProvider>
                 
                  <Box sx={{ m:2 }}>
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <motion.div
                      initial={{ opacity: 0, y: -5}}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                    <Accordion defaultExpanded>
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      TYPES
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {Types.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.type_name}
                          type="checkbox"
                          checked={checkedTypes.includes(row.attributes.type_name)}
                          onChange={(event)=> {handleChangeChkTypes(event,row.attributes.type_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.type_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.type_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </motion.div>
                    </AccordionGroup>
                    
                    {subTires_brand_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                       <motion.div
                      initial={{ opacity: 0, y: -5}}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                       <Divider orientation="horizontal">
                      TIRES
                    </Divider>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRANDS
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {tireBrand.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.brand_name}
                          type="checkbox"
                          checked={checkedTireBrands.includes(row.attributes.brand_name)}
                          onChange={(event)=> {handleChangeChkTireBrands(event,row.attributes.brand_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.brand_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </motion.div>
                    </AccordionGroup>
                    : null}

                    {subTires_diameter_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded>
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      DIAMETER
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>

                      {tireDiameter.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.diameter_name}
                          type="checkbox"
                          checked={checkedTireDiameter.includes(row.attributes.diameter_name)}
                          onChange={(event)=> {handleChangeChkTireDiameter(event,row.attributes.diameter_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.diameter_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.diameter_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subTires_width_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded>
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      WIDTH
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>

                      {tireWidth.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.width_name}
                          type="checkbox"
                          checked={checkedTireWidth.includes(row.attributes.width_name)}
                          onChange={(event)=> {handleChangeChkTireWidth(event,row.attributes.width_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.width_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.width_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subTires_ratio_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded>
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      RATIO
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>

                      {tireRatio.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.ratio_name}
                          type="checkbox"
                          checked={checkedTireRatio.includes(row.attributes.ratio_name)}
                          onChange={(event)=> {handleChangeChkTireRatio(event,row.attributes.ratio_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.ratio_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.ratio_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subLubeOil_brand_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                       <Divider orientation="horizontal">
                      LUBE OIL
                    </Divider>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRANDS
                    </Typography>
                    </ThemeProvider>    
                    </AccordionSummary>
                      <AccordionDetails>
                      {lubeOil_Brand.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.brand_name}
                          type="checkbox"
                          checked={checkedLubeOilBrand.includes(row.attributes.brand_name)}
                          onChange={(event)=> {handleChangeChkLubeOil_Brand(event,row.attributes.brand_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.brand_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subLubeOil_fluid_type_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      FLUID TYPES
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {lubeOil_fluid_type.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.fluid_type_name}
                          type="checkbox"
                          checked={checkedLubeOilFluid_type.includes(row.attributes.fluid_type_name)}
                          onChange={(event)=> {handleChangeChkLubeOil_Fluid_type(event,row.attributes.fluid_type_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.fluid_type_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.fluid_type_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subLubeOil_engineOil_typesofengineoil_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      TYPES OF <br /> 
                      ENGINE OIL
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {lubeOil_engineOil_typesofengineoil.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.typesofengineoil_name}
                          type="checkbox"
                          checked={checkedLubeOil_engineOil_typesofengineoil.includes(row.attributes.typesofengineoil_name)}
                          onChange={(event)=> {handleChangeChkLubeOil_engineOil_typesofengineoil(event,row.attributes.typesofengineoil_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.typesofengineoil_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.typesofengineoil_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subShockAbsorber_brand_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                       <Divider orientation="horizontal">
                      SHOCK ABSORBER
                    </Divider>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRANDS
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {shockAbsorber_Brand.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.brand_name}
                          type="checkbox"
                          checked={checkedShockAbsorberBrands.includes(row.attributes.brand_name)}
                          onChange={(event)=> {handleChangeChkShockAbsorberBrands(event,row.attributes.brand_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.brand_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subShockAbsorber_shockuptype_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      SHOCK UP TYPE
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {shockAbsorber_Shockuptype.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.shockuptype_name}
                          type="checkbox"
                          checked={checkedShockAbsorberShockuptype.includes(row.attributes.shockuptype_name)}
                          onChange={(event)=> {handleChangeChkShockAbsorberShockuptype(event,row.attributes.shockuptype_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.shockuptype_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.shockuptype_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subBrake_brand_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                      <Divider orientation="horizontal">
                      BRAKE
                    </Divider>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRANDS
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {brake_brands.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.brand_name}
                          type="checkbox"
                          checked={checkedBrakeBrands.includes(row.attributes.brand_name)}
                          onChange={(event)=> {handleChangeChkBrakeBrands(event,row.attributes.brand_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.brand_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subBrake_braketype_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRAKE TYPE
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {brake_braketype.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.braketype_name}
                          type="checkbox"
                          checked={checkedBrakeBraketype.includes(row.attributes.braketype_name)}
                          onChange={(event)=> {handleChangeChkBrakeBraketype(event,row.attributes.braketype_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.braketype_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.braketype_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subBattery_brand_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                      <Divider orientation="horizontal">
                      BATTERY
                    </Divider>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontFamily: "revert",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRANDS
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {battery_brands.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.brand_name}
                          type="checkbox"
                          checked={checkedBatteryBrands.includes(row.attributes.brand_name)}
                          onChange={(event)=> {handleChangeChkBatteryBrands(event,row.attributes.brand_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.brand_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subBattery_amp_fIlter?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      AMP
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {battery_amp.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.amp_name}
                          type="checkbox"
                          checked={checkedBatteryAmp.includes(row.attributes.amp_name)}
                          onChange={(event)=> {handleChangeChkBatteryAmp(event,row.attributes.amp_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.amp_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.amp_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}

                    {subOtherproduct_brands?
                    <AccordionGroup disableDivider sx={{ maxWidth: 'auto' }}>
                      <Divider orientation="horizontal">
                      OTHER PRODUCT
                    </Divider>
                    <Accordion defaultExpanded >
                      <AccordionSummary>
                      <ThemeProvider theme={font}>
                        <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      BRANDS
                    </Typography>
                    </ThemeProvider>
                    </AccordionSummary>
                      <AccordionDetails>
                      {otherproduct_brands.map((row:any, index:any) => (
                      <div className="checkbox-wrapper-4" key={index}>
                        <input
                          className="inp-cbx"
                          id={row.attributes.brand_name}
                          type="checkbox"
                          checked={checkedOtherproduct_brands.includes(row.attributes.brand_name)}
                          onChange={(event)=> {handleChangeChkOtherproduct_brands(event,row.attributes.brand_name)}}
                          
                        />
                        <label className="cbx" htmlFor={row.attributes.brand_name}>
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>
                          <ThemeProvider theme={font}>
                            <Typography sx={{ fontSize: "16px" }}>
                            {row.attributes.brand_name.replace(/_/g, ' ').toUpperCase()}
                            </Typography>
                            </ThemeProvider>
                          </span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    ))}
                      </AccordionDetails>
                    </Accordion>
                    </AccordionGroup>
                    : null}
                    
                  </Box>
                </Grid>
              </Box>

        </React.Fragment>
    )
}

