$(document).ready(function(){

    $("#btn").click(function(){
	var myGenesTMP = $( "#Genes" ).val();
	var myGrp1 = $( "#Grp1" ).text();
	var myGroupingPop = $( "#groupingpop" ).is(':checked');
	var myGenes = myGenesTMP.split("\n").join(",");
	var n = myGenes.length;
	myGenes = myGenes.substring(0, n-1);
	//openBackWindow( 'http://itlvmbibp01.med.harvard.edu/test/cgi-bin/submit6.cgi?Grp1=' + myGrp1 + '&Genes=' + myGenes )
	// openBackWindow( 'http://itlvmbibp01.med.harvard.edu/test/cgi-bin/submit8.cgi?Grp1=' + myGrp1 + '&Genes=' + myGenes + '&groupingPop=' + myGroupingPop.toString().toUpperCase())
	openBackWindow( 'http://rstats.immgen.org/MyGeneSet/cgi-bin/submit8.cgi?Grp1=' + myGrp1 + '&Genes=' + myGenes + '&groupingPop=' + myGroupingPop.toString().toUpperCase())
    });

    $("#btn2").click(function(){
	var myGenesTMP = $( "#Genes" ).val();
	var myGrp1 = $( "#Grp1" ).text();
	var myGenes = myGenesTMP.split("\n").join(",");
	var n = myGenes.length;
	myGenes = myGenes.substring(0, n-1);
//	openBackWindow2( 'http://itlvmbibp01.med.harvard.edu/test/cgi-bin/pushImagetest4.cgi?Grp1=' + myGrp1 + '&Genes=' + myGenes );
	openBackWindow2( 'http://rstats.immgen.org/MyGeneSet/cgi-bin/pushImagetest5.cgi?Grp1=' + myGrp1 + '&Genes=' + myGenes );
    });


    function openBackWindow(url,popName){
        var popupWindow = window.open(url,popName,'scrollbars=1,height=500,width=1050');
        if($.browser.msie){
            popupWindow.blur();
            window.focus();
        }else{
            blurPopunder();
        }
    };

    function openBackWindow2(url,popName){
        var popupWindow = window.open(url,popName,'scrollbars=1,height=5,width=5');
        if($.browser.msie){
            popupWindow.blur();
            window.focus();
        }else{
            blurPopunder();
        }
	setTimeout(function() { popupWindow.close() }, 6000);
    };

    function blurPopunder() {
        var winBlankPopup = window.open("about:blank");
        if (winBlankPopup) {
            winBlankPopup.focus();
            winBlankPopup.close()
        }
    };
});

$( "#groupingpop" ).prop('checked', true);

var treeData = [
    {title: "check all", isFolder: true, key: "chech all", icon: false,
     children: [

	 {title: "Stem Cells", isFolder: true, key: "Stem Cells", icon: false,
	  children: [
	      {title:"SC_LT34F_BM", key: "SC_LT34F_BM", icon: false },
	      {title:"SC_LTSL_BM", key: "SC_LTSL_BM", icon: false},
	      {title:"SC_STSL_BM", key: "SC_STSL_BM", icon: false},
	      {title:"SC_LTSL_FL", key: "SC_LTSL_FL", icon: false},
	      {title:"SC_STSL_FL", key: "SC_STSL_FL", icon: false},
	      {title:"SC_MPP34F_BM", key: "SC_MPP34F_BM", icon: false},
	      {title:"SC_ST34F_BM", key: "SC_ST34F_BM", icon: false},
	      {title:"SC_CMP_BM", key: "SC_CMP_BM", icon: false},
	      {title:"SC_MEP_BM", key: "SC_MEP_BM", icon: false},
	      {title:"SC_GMP_BM", key: "SC_GMP_BM", icon: false},
	      {title:"SC_CDP_BM", key: "SC_CDP_BM", icon: false},
	      {title:"SC_MDP_BM", key: "SC_MDP_BM", icon: false},
	      {title:"MLP_BM", key: "MLP_BM", icon: false},
	      {title:"MLP_FL", key: "MLP_FL", icon: false},

	  ]
	 },
	 {title: "B cells", isFolder: true, key: "B cells", icon: false,
	  children: [

	      {title:"proB_CLP_BM", key:"proB_CLP_BM", icon: false },
	      {title:"proB_FrA_BM", key:"proB_FrA_BM", icon: false },
	      {title:"proB_FrBC_BM", key:"proB_FrBC_BM", icon: false },
	      {title:"preB_FrC_BM", key:"preB_FrC_BM", icon: false },
	      {title:"preB_FrD_BM", key:"preB_FrD_BM", icon: false },
	      {title:"B_FrE_BM", key:"B_FrE_BM", icon: false },
	      {title:"proB_CLP_FL", key:"proB_CLP_FL", icon: false },
	      {title:"proB_FrA_FL", key:"proB_FrA_FL", icon: false },
	      {title:"proB_FrBC_FL", key:"proB_FrBC_FL", icon: false },
	      {title:"preB_FrD_FL", key:"preB_FrD_FL", icon: false },
	      {title:"B_FrE_FL", key:"B_FrE_FL", icon: false },
	      {title:"B_T1_Sp", key:"B_T1_Sp", icon: false },
	      {title:"B_T2_Sp", key:"B_T2_Sp", icon: false },
	      {title:"B_T3_Sp", key:"B_T3_Sp", icon: false },
	      {title:"B_Fo_Sp", key:"B_Fo_Sp", icon: false },
	      {title:"B_GC_Sp", key:"B_GC_Sp", icon: false },
	      {title:"B_MZ_Sp", key:"B_MZ_Sp", icon: false },
	      {title:"B1a_Sp", key:"B1a_Sp", icon: false },
	      {title:"B_FrF_BM", key:"B_FrF_BM", icon: false },
	      {title:"B_Fo_MLN", key:"B_Fo_MLN", icon: false },
	      {title:"B_Fo_LN", key:"B_Fo_LN", icon: false },
	      {title:"B_Fo_PC", key:"B_Fo_PC", icon: false },
	      {title:"B1b_PC", key:"B1b_PC", icon: false },
	      {title:"B1a_PC", key:"B1a_PC", icon: false }


	  ]
	 }, 


         {title: "Dendritic cells", isFolder: true, key: "Dendritic cells", icon: false,
          children: [

	      {title:"DC_8-_Th", key:"DC_8-_Th", icon: false },
	      {title:"DC_8+_Th", key:"DC_8%2B_Th", icon: false },
	      {title:"DC_4+_Sp", key:"DC_4%2B_Sp", icon: false },
	      {title:"DC_8+_Sp", key:"DC_8%2B_Sp", icon: false },
	      {title:"DC_8-4-11b-_Sp", key:"DC_8-4-11b-_Sp", icon: false },
	      {title:"DC_8-4-11b+_Sp", key:"DC_8-4-11b%2B_Sp", icon: false },
	      {title:"DC_pDC_8-_Sp", key:"DC_pDC_8-_Sp", icon: false },
	      {title:"DC_pDC_8+_Sp", key:"DC_pDC_8%2B_Sp", icon: false },
	      {title:"DC_4+_SLN", key:"DC_4%2B_SLN", icon: false },
	      {title:"DC_8+_SLN", key:"DC_8%2B_SLN", icon: false },
	      {title:"DC_8-4-11b-_SLN", key:"DC_8-4-11b-_SLN", icon: false },
	      {title:"DC_8-4-11b+_SLN", key:"DC_8-4-11b%2B_SLN", icon: false },
	      {title:"DC_pDC_8+_SLN", key:"DC_pDC_8%2B_SLN", icon: false },
	      {title:"DC_IIhilang-103-11blo_SLN", key:"DC_IIhilang-103-11blo_SLN", icon: false },
	      {title:"DC_IIhilang-103-11b+_SLN", key:"DC_IIhilang-103-11b%2B_SLN", icon: false },
	      {title:"DC_IIhilang+103+11blo_SLN", key:"DC_IIhilang%2B103%2B11blo_SLN", icon: false },
	      {title:"DC_IIhilang+103-11b+_SLN", key:"DC_IIhilang%2B103-11b%2B_SLN", icon: false },
	      {title:"DC_4+_MLN", key:"DC_4%2B_MLN", icon: false },
	      {title:"DC_8+_MLN", key:"DC_8%2B_MLN", icon: false },
	      {title:"DC_8-4-11b-_MLN", key:"DC_8-4-11b-_MLN", icon: false },
	      {title:"DC_8-4-11b+_MLN", key:"DC_8-4-11b%2B_MLN", icon: false },
	      {title:"DC_pDC_8+_MLN", key:"DC_pDC_8%2B_MLN", icon: false },
	      {title:"DC_LC_Sk", key:"DC_LC_Sk", icon: false },
	      {title:"DC_103-11b+_Lv", key:"DC_103-11b%2B_Lv", icon: false },
	      {title:"DC_103+11b-_Lv", key:"DC_103%2B11b-_Lv", icon: false },
	      {title:"DC_103+11b-_LuLN", key:"DC_103%2B11b-_LuLN", icon: false },
	      {title:"DC_103-11b+_LuLN", key:"DC_103-11b%2B_LuLN", icon: false },

	      {title:"DC_103-11b+24+_Lu", key:"DC_103-11b%2B24%2B_Lu", icon: false },
	      {title:"DC_103+11b-_Lu", key:"DC_103%2B11b-_Lu", icon: false },
	      {title:"DC_103-11b+_PolyIC_Lu", key:"DC_103-11b%2B_PolyIC_Lu", icon: false },
	      {title:"DC_103+11b-_PolyIC_Lu", key:"DC_103%2B11b-_PolyIC_Lu", icon: false },

	      {title:"DC_103-11b+F4/80lo_Kd", key:"DC_103-11b%2BF4/80lo_Kd", icon: false },

	      {title:"DC_103+11b-_SI", key:"DC_103%2B11b-_SI", icon: false },
	      {title:"DC_103+11b+_SI", key:"DC_103%2B11b%2B_SI", icon: false },

	      {title:"DC_103+11b-_Salm3_SI", key:"DC_103%2B11b-_Salm3_SI", icon: false },
	      {title:"DC_103+11b+_Salm3_SI", key:"DC_103%2B11b%2B_Salm3_SI", icon: false },



	  ]},
         {title: "Macrophages", isFolder: true, key: "Macrophages", icon: false,
          children: [

	      {title:"MF_BM", key:"MF_BM", icon: false },
	      {title:"MF_RP_Sp", key:"MF_RP_Sp", icon: false },
	      {title:"MF_169+11chi_SLN", key:"MF_169%2B11chi_SLN", icon: false },
	      {title:"MF_Medl_SLN", key:"MF_Medl_SLN", icon: false },
	      {title:"MF_Sbcaps_SLN", key:"MF_Sbcaps_SLN", icon: false },
	      {title:"MF_Lu", key:"MF_Lu", icon: false },
	      {title:"MF_II-480hi_PC", key:"MF_II-480hi_PC", icon: false },
	      {title:"MF_Microglia_CNS", key:"MF_Microglia_CNS", icon: false },
	      {title:"MF_Thio5_II+480int_PC", key:"MF_Thio5_II%2B480int_PC", icon: false },
	      {title:"MF_Thio5_II-480int_PC", key:"MF_Thio5_II-480int_PC", icon: false },
	      {title:"MF_Thio5_II-480hi_PC", key:"MF_Thio5_II-480hi_PC", icon: false },
	      {title:"MF_Thio5_II+480lo_PC", key:"MF_Thio5_II%2B480lo_PC", icon: false },

	      {title:"MF_II+480lo_PC", key:"MF_II%2B480lo_PC", icon: false },
	      {title:"MF_103-11b+_SI", key:"MF_103-11b%2B_SI", icon: false },
	      {title:"MF_11cloSer_SI", key:"MF_11cloSer_SI", icon: false },
	      {title:"MF_103-11b+_Salm3_SI", key:"MF_103-11b%2B_Salm3_SI", icon: false },
	      {title:"MF_103-11b+24-_Lu", key:"MF_103-11b%2B24-_Lu", icon: false },
	      {title:"MF_11cloSer_Salm3_SI", key:"MF_11cloSer_Salm3_SI", icon: false },

	  ]},


         {title: "Monocytes", isFolder: true, key: "Monocytes", icon: false,
          children: [


	      {title:"Mo_6C+II-_BM", key:"Mo_6C%2BII-_BM", icon: false },
	      {title:"Mo_6C-II-_BM", key:"Mo_6C-II-_BM", icon: false },
	      {title:"Mo_6C+II-_Bl", key:"Mo_6C%2BII-_Bl", icon: false },
	      {title:"Mo_6C+II+_Bl", key:"Mo_6C%2BII%2B_Bl", icon: false },
	      {title:"Mo_6C-II-_Bl", key:"Mo_6C-II-_Bl", icon: false },
	      {title:"Mo_6C-II+_Bl", key:"Mo_6C-II%2B_Bl", icon: false },
	      {title:"Mo_6C-IIint_Bl", key:"Mo_6C-IIint_Bl", icon: false },
	      {title:"Mo_6C+II-_LN", key:"Mo_6C%2BII-_LN", icon: false },

	  ]},

         {title: "Neutrophils", isFolder: true, key: "Neutrophils", icon: false,
          children: [


	      {title:"GN_BM", key:"GN_BM", icon: false },
	      {title:"GN_Bl", key:"GN_Bl", icon: false },
	      {title:"GN_Arth_BM", key:"GN_Arth_BM", icon: false },
	      {title:"GN_Arth_SynF", key:"GN_Arth_SynF", icon: false },
	      {title:"GN_UrAc_PC", key:"GN_UrAc_PC", icon: false },
	      {title:"GN_Thio_PC", key:"GN_Thio_PC", icon: false },

	  ]},

         {title: "NK cells", isFolder: true, key: "NK cells", icon: false,
          children: [


	      {title:"NK_Sp", key:"NK_Sp", icon: false },
	      {title:"NK_49CI-_Sp", key:"NK_49CI-_Sp", icon: false },
	      {title:"NK_49CI+_Sp", key:"NK_49CI%2B_Sp", icon: false },
	      {title:"NK_49H-_Sp", key:"NK_49H-_Sp", icon: false },
	      {title:"NK_49H+_Sp", key:"NK_49H%2B_Sp", icon: false },
	      {title:"NK_MCMV1_Sp", key:"NK_MCMV1_Sp", icon: false },
	      {title:"NK_MCMV7_Sp", key:"NK_MCMV7_Sp", icon: false },
	      {title:"NK_H+_MCMV1_Sp", key:"NK_H%2B_MCMV1_Sp", icon: false },
	      {title:"NK_H+_MCMV7_Sp", key:"NK_H%2B_MCMV7_Sp", icon: false },
	      {title:"NK_b2m-_Sp", key:"NK_b2m-_Sp", icon: false },
	      {title:"NK_DAP10-_Sp", key:"NK_DAP10-_Sp", icon: false },
	      {title:"NK_DAP12-_Sp", key:"NK_DAP12-_Sp", icon: false },


	  ]},

         {title: "ab T cells", isFolder: true, key: "ab T cells", icon: false,
          children: [


	      {title:"preT_ETP_Th", key:"preT_ETP_Th", icon: false },
	      {title:"preT_ETP-2A_Th", key:"preT_ETP-2A_Th", icon: false },
	      {title:"preT_DN2_Th", key:"preT_DN2_Th", icon: false },
	      {title:"preT_DN2A_Th", key:"preT_DN2A_Th", icon: false },
	      {title:"preT_DN2B_Th", key:"preT_DN2B_Th", icon: false },
	      {title:"preT_DN2-3_Th", key:"preT_DN2-3_Th", icon: false },
	      {title:"preT_DN3A_Th", key:"preT_DN3A_Th", icon: false },
	      {title:"preT_DN3B_Th", key:"preT_DN3B_Th", icon: false },
	      {title:"preT_DN3-4_Th", key:"preT_DN3-4_Th", icon: false },
	      {title:"T_DN4_Th", key:"T_DN4_Th", icon: false },
	      {title:"T_ISP_Th", key:"T_ISP_Th", icon: false },
	      {title:"T_DP_Th", key:"T_DP_Th", icon: false },
	      {title:"T_DPbl_Th", key:"T_DPbl_Th", icon: false },
	      {title:"T_DPsm_Th", key:"T_DPsm_Th", icon: false },
	      {title:"T_DP69+_Th", key:"T_DP69%2B_Th", icon: false },
	      {title:"T_4+8int_Th", key:"T_4%2B8int_Th", icon: false },
	      {title:"T_4SP69+_Th", key:"T_4SP69%2B_Th", icon: false },
	      {title:"T_4SP24int_Th", key:"T_4SP24int_Th", icon: false },
	      {title:"T_4SP24-_Th", key:"T_4SP24-_Th", icon: false },
	      {title:"T_4int8+_Th", key:"T_4int8%2B_Th", icon: false },
	      {title:"T_8SP69+_Th", key:"T_8SP69%2B_Th", icon: false },
	      {title:"T_8SP24int_Th", key:"T_8SP24int_Th", icon: false },
	      {title:"T_8SP24-_Th", key:"T_8SP24-_Th", icon: false },
	      {title:"T_4Nve_Sp", key:"T_4Nve_Sp", icon: false },
	      {title:"T_4Mem_Sp", key:"T_4Mem_Sp", icon: false },
	      {title:"T_4Mem44h62l_Sp", key:"T_4Mem44h62l_Sp", icon: false },
	      {title:"T_4Nve_LN", key:"T_4Nve_LN", icon: false },
	      {title:"T_4Mem_LN", key:"T_4Mem_LN", icon: false },
	      {title:"T_4Mem44h62l_LN", key:"T_4Mem44h62l_LN", icon: false },
	      {title:"T_4Nve_PP", key:"T_4Nve_PP", icon: false },
	      {title:"T_4Nve_MLN", key:"T_4Nve_MLN", icon: false },
	      {title:"T_4_LN_BDC", key:"T_4_LN_BDC", icon: false },
	      {title:"T_4_PLN_BDC", key:"T_4_PLN_BDC", icon: false },
	      {title:"T_4_Pa_BDC", key:"T_4_Pa_BDC", icon: false },
	      {title:"T_4FP3-_Sp", key:"T_4FP3-_Sp", icon: false },
	      {title:"T_4FP3+25+_Sp", key:"T_4FP3%2B25%2B_Sp", icon: false },
	      {title:"T_4FP3+25+_AA", key:"T_4FP3%2B25%2B_AA", icon: false },
	      {title:"T_4FP3+25+_LN", key:"T_4FP3%2B25%2B_LN", icon: false },
	      {title:"T_8Nve_Sp", key:"T_8Nve_Sp", icon: false },
	      {title:"T_8Mem_Sp", key:"T_8Mem_Sp", icon: false },
	      {title:"T_8Nve_LN", key:"T_8Nve_LN", icon: false },
	      {title:"T_8Mem_LN", key:"T_8Mem_LN", icon: false },
	      {title:"T_8Nve_PP", key:"T_8Nve_PP", icon: false },
	      {title:"T_8Nve_MLN", key:"T_8Nve_MLN", icon: false },
	      {title:"T_8Nve_Sp_OT1", key:"T_8Nve_Sp_OT1", icon: false },
	      {title:"T_8Eff_Sp_OT1_d5_VSVOva", key:"T_8Eff_Sp_OT1_d5_VSVOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d6_VSVOva", key:"T_8Eff_Sp_OT1_d6_VSVOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d8_VSVOva", key:"T_8Eff_Sp_OT1_d8_VSVOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d15_VSVOva", key:"T_8Eff_Sp_OT1_d15_VSVOva", icon: false },
	      {title:"T_8Mem_Sp_OT1_d45_VSVOva", key:"T_8Mem_Sp_OT1_d45_VSVOva", icon: false },
	      {title:"T_8Mem_Sp_OT1_d106_VSVOva", key:"T_8Mem_Sp_OT1_d106_VSVOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_12hr_LisOva", key:"T_8Eff_Sp_OT1_12hr_LisOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_24hr_LisOva", key:"T_8Eff_Sp_OT1_24hr_LisOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_48hr_LisOva", key:"T_8Eff_Sp_OT1_48hr_LisOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d6_LisOva", key:"T_8Eff_Sp_OT1_d6_LisOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d8_LisOva", key:"T_8Eff_Sp_OT1_d8_LisOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d10_LisOva", key:"T_8Eff_Sp_OT1_d10_LisOva", icon: false },
	      {title:"T_8Eff_Sp_OT1_d15_LisOva", key:"T_8Eff_Sp_OT1_d15_LisOva", icon: false },
	      {title:"T_8Mem_Sp_OT1_d45_LisOva", key:"T_8Mem_Sp_OT1_d45_LisOva", icon: false },
	      {title:"T_8Mem_Sp_OT1_d100_LisOva", key:"T_8Mem_Sp_OT1_d100_LisOva", icon: false },
	      {title:"NKT_44-NK1_1-_Th", key:"NKT_44-NK1_1-_Th", icon: false },
	      {title:"NKT_44+NK1_1-_Th", key:"NKT_44%2BNK1_1-_Th", icon: false },
	      {title:"NKT_44+NK1_1+_Th", key:"NKT_44%2BNK1_1%2B_Th", icon: false },
	      {title:"NKT_4+_Sp", key:"NKT_4%2B_Sp", icon: false },
	      {title:"NKT_4-_Sp", key:"NKT_4-_Sp", icon: false },
	      {title:"NKT_4+_Lv", key:"NKT_4%2B_Lv", icon: false },
	      {title:"NKT_4-_Lv", key:"NKT_4-_Lv", icon: false },
	  ]},

         {title: "gd T cells", isFolder: true, key: "gd T cells", icon: false,
          children: [



	      {title:"Tgd_Th", key:"Tgd_Th", icon: false },
	      {title:"Tgd_vg1+vd6-24ahi_Th", key:"Tgd_vg1%2Bvd6-24ahi_Th", icon: false },
	      {title:"Tgd_vg1+vd6+24ahi_Th", key:"Tgd_vg1%2Bvd6%2B24ahi_Th", icon: false },
	      {title:"Tgd_vg2+24ahi_Th", key:"Tgd_vg2%2B24ahi_Th", icon: false },
	      {title:"Tgd_vg2+24ahi_e17_Th", key:"Tgd_vg2%2B24ahi_e17_Th", icon: false },
	      {title:"Tgd_vg3+24ahi_e17_Th", key:"Tgd_vg3%2B24ahi_e17_Th", icon: false },
	      {title:"Tgd_vg5+24ahi_Th", key:"Tgd_vg5%2B24ahi_Th", icon: false },
	      {title:"Tgd_vg1+vd6-24alo_Th", key:"Tgd_vg1%2Bvd6-24alo_Th", icon: false },
	      {title:"Tgd_vg1+vd6+24alo_Th", key:"Tgd_vg1%2Bvd6%2B24alo_Th", icon: false },
	      {title:"Tgd_vg2+24alo_Th", key:"Tgd_vg2%2B24alo_Th", icon: false },
	      {title:"Tgd_vg3+24alo_e17_Th", key:"Tgd_vg3%2B24alo_e17_Th", icon: false },
	      {title:"Tgd_Sp", key:"Tgd_Sp", icon: false },
	      {title:"Tgd_vg2-_Sp", key:"Tgd_vg2-_Sp", icon: false },
	      {title:"Tgd_vg2-_act_Sp", key:"Tgd_vg2-_act_Sp", icon: false },
	      {title:"Tgd_vg2+_Sp", key:"Tgd_vg2%2B_Sp", icon: false },
	      {title:"Tgd_vg2+_act_Sp", key:"Tgd_vg2%2B_act_Sp", icon: false },
	      {title:"Tgd_vg2-_Sp_TCRbko", key:"Tgd_vg2-_Sp_TCRbko", icon: false },
	      {title:"Tgd_vg2+_Sp_TCRbko", key:"Tgd_vg2%2B_Sp_TCRbko", icon: false },
	      {title:"Tgd_vg5-_IEL", key:"Tgd_vg5-_IEL", icon: false },
	      {title:"Tgd_vg5+_IEL", key:"Tgd_vg5%2B_IEL", icon: false },
	      {title:"Tgd_vg5-_act_IEL", key:"Tgd_vg5-_act_IEL", icon: false },
	      {title:"Tgd_vg5+_act_IEL", key:"Tgd_vg5%2B_act_IEL", icon: false },

	  ]},


         {title: "Stromal cells", isFolder: true, key: "Stromal cells", icon: false,
          children: [
	      

	      {title:"Ep_MEChi_Th", key:"Ep_MEChi_Th", icon: false },
	      {title:"Fi_MTS15+_Th", key:"Fi_MTS15%2B_Th", icon: false },
	      {title:"Fi_Sk", key:"Fi_Sk", icon: false },
	      {title:"FRC_MLN", key:"FRC_MLN", icon: false },
	      {title:"FRC_SLN", key:"FRC_SLN", icon: false },
	      {title:"LEC_MLN", key:"LEC_MLN", icon: false },
	      {title:"LEC_SLN", key:"LEC_SLN", icon: false },
	      {title:"BEC_MLN", key:"BEC_MLN", icon: false },
	      {title:"BEC_SLN", key:"BEC_SLN", icon: false },
	      {title:"St_31-38-44-_SLN", key:"St_31-38-44-_SLN", icon: false },
	  ]
	 } 
     ] 
    }

]; // end treeData


$(function(){

    // --- Initialize sample trees

    $("#tree3").dynatree({
	checkbox: true,
        minExpandLevel:2,
	selectMode: 3,
	autoCollapse: true,
	children: treeData,
	onSelect: function(select, node) {
	    // Get a list of all selected nodes, and convert to a key array:
	    var selKeys = $.map(node.tree.getSelectedNodes(), function(node){
		if (node.hasChildren() == false) { return node.data.key; }
	    });
	    $("#echoSelection3").text(selKeys.join(", "));
	    $("#Grp1").text(selKeys.join(","));


	    // Get a list of all selected TOP nodes
	    var selRootNodes = node.tree.getSelectedNodes(true);
	    // ... and convert to a key array:
	    var selRootKeys = $.map(selRootNodes, function(node){
		return node.data.key;
	    });
	    
	    $("#echoSelectionRootKeys3").text(selRootKeys.join(", "));
	    $("#echoSelectionRoots3").text(selRootNodes.join(", "));
	},
	onDblClick: function(node, event) {
	    node.toggleSelect();
	},

	// The following options are only required, if we have more than one tree on one page:
	//				initId: "treeData",
	cookieId: "dynatree-Cb3",
	idPrefix: "dynatree-Cb3-"
    });

    $("#skinCombo")
	.val(0) // set state to prevent caching
	.change(function(){
	    var href = "../src/"
		+ $(this).val()
		+ "/ui.dynatree.css"
		+ "?reload=" + new Date().getTime();
	    $("#skinSheet").attr("href", href);
	});

});

// function handleFileSelect(evt) {
//     evt.stopPropagation();
//     evt.preventDefault();

//     var files = evt.dataTransfer.files; // FileList object.
//     var reader = new FileReader();  
//     reader.onload = function(event) {            
//         document.getElementById('Genes').value = event.target.result;
//     }        
//     reader.readAsText(files[0],"UTF-8");
// }

// function handleDragOver(evt) {
//     evt.stopPropagation();
//     evt.preventDefault();
//     evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
// }

// // Setup the dnd listeners.
// var dropZone = document.getElementById('Genes');
// dropZone.addEventListener('dragover', handleDragOver, false);
// dropZone.addEventListener('drop', handleFileSelect, false);

