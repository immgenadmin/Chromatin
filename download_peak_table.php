<?php
	//session_start ();          
	
	//$chr = $_POST['chr'];   
	//$offset = intval($_POST['offset']);  
	//$tss = intval($_POST['tss']);
	
	$url = $_SERVER['REQUEST_URI'];
	$tmp = explode("=", $url);
	//print_r($tmp);
	$tmp1 = explode("&", $tmp[1]);
	$chr = $tmp1[0];
	$tmp2 = explode("&", $tmp[2]);
	$offset = intval($tmp2[0]);
	$tmp3 = explode("&", $tmp[3]);
	$tss = intval($tmp3[0]);
	$tmp4 = explode("&", $tmp[4]);
	$end = intval($tmp4[0]);
	$array = explode(",", $tmp[5]);
	//print_r ($array);
	$all = array(
		"preT_DN1_Th"=>"preT_DN1_Th",
		"preT_DN2a_Th"=>"preT_DN2a_Th",
		"preT_DN2b_Th"=>"preT_DN2b_Th",
		"preT_DN3_Th"=>"preT_DN3_Th",
		"T_4_Nve_Fem_Sp"=>"T_4_Nve_Fem_Sp",
		"T_4_Nve_Sp"=>"T_4_Nve_Sp",
		"T_4_Sp_aCD3%2BCD40_18hr"=>"T_4_Sp_aCD3+CD40_18hr",
		"T_4_Th"=>"T_4_Th",
		"T8_IEL_LCMV_d7_Gut"=>"T8_IEL_LCMV_d7_Gut",
		"T8_MP_LCMV_d7_Sp"=>"T8_MP_LCMV_d7_Sp",
		"T_8_Nve_Sp"=>"T_8_Nve_Sp",
		"T8_Tcm_LCMV_d180_Sp"=>"T8_Tcm_LCMV_d180_Sp",
		"T8_TE_LCMV_d7_Sp"=>"T8_TE_LCMV_d7_Sp",
		"T8_Tem_LCMV_d180_Sp"=>"T8_Tem_LCMV_d180_Sp",
		"T_8_Th"=>"T_8_Th",
		"T8_TN_P14_Sp"=>"T8_TN_P14_Sp",
		"T_DN4_Th"=>"T_DN4_Th",
		"T_DP_Th"=>"T_DP_Th",
		"T_ISP_Th"=>"T_ISP_Th",
		"Treg_4_25hi_Sp"=>"Treg_4_25hi_Sp",
		"Treg_4_FP3%2B_Nrplo_Co"=>"Treg_4_FP3+_Nrplo_Co",
		"NKT_Sp_LPS_18hr"=>"NKT_Sp_LPS_18hr",
		"NKT_Sp_LPS_3d"=>"NKT_Sp_LPS_3d",
		"NKT_Sp_LPS_3hr"=>"NKT_Sp_LPS_3hr",
		"NKT_Sp"=>"NKT_Sp",
		"B1b_PC"=>"B1b_PC",
		"B_Fem_Sp"=>"B_Fem_Sp",
		"B_Fo_Sp"=>"B_Fo_Sp",
		"B_FrE_BM"=>"B_FrE_BM",
		"B_GC_CB_Sp"=>"B_GC_CB_Sp",
		"B_GC_CC_Sp"=>"B_GC_CC_Sp",
		"B_mem_Sp"=>"B_mem_Sp",
		"B_MZ_Sp"=>"B_MZ_Sp",
		"B_PB_Sp"=>"B_PB_Sp",
		"B_PC_BM"=>"B_PC_BM",
		"B_PC_Sp"=>"B_PC_Sp",
		"B_Sp"=>"B_Sp",
		"B_T1_Sp"=>"B_T1_Sp",
		"B_T2_Sp"=>"B_T2_Sp",
		"B_T3_Sp"=>"B_T3_Sp",
		"preB_FrD_BM"=>"preB_FrD_BM",
		"proB_CLP_BM"=>"proB_CLP_BM",
		"proB_FrA_BM"=>"proB_FrA_BM",
		"proB_FrBC_BM"=>"proB_FrBC_BM",
		"DC_103%2B11b-_SI"=>"DC_103+11b-_SI",
		"DC_103%2B11b%2B_SI"=>"DC_103+11b+_SI",
		"DC_4%2B_Sp"=>"DC_4+_Sp",
		"DC_8%2B_Sp"=>"DC_8+_Sp",
		"DC_pDC_Sp"=>"DC_pDC_Sp",
		"Tgd_g1_1%2Bd1_24a%2B_Th"=>"Tgd_g1_1+d1_24a+_Th",
		"Tgd_g1_1%2Bd1_LN"=>"Tgd_g1_1+d1_LN",
		"Tgd_g2%2Bd1_24a%2B_Th"=>"Tgd_g2+d1_24a+_Th",
		"Tgd_g2%2Bd17_24a%2B_Th"=>"Tgd_g2+d17_24a+_Th",
		"Tgd_g2%2Bd17_LN"=>"Tgd_g2+d17_LN",
		"Tgd_g2%2Bd1_LN"=>"Tgd_g2+d1_LN",
		"Tgd_Sp"=>"Tgd_Sp",
		"GN_BM"=>"GN_BM",
		"GN_Sp"=>"GN_Sp",
		"GN_Thio_PC"=>"GN_Thio_PC",
		"ILC2_SI"=>"ILC2_SI",
		"ILC3_CCR6%2B_SI"=>"ILC3_CCR6+_SI",
		"ILC3_NKp46-CCR6-_SI"=>"ILC3_NKp46-CCR6-_SI",
		"ILC3_NKp46%2B_SI"=>"ILC3_NKp46+_SI",
		"NK_27-11b%2B_BM"=>"NK_27-11b+_BM",
		"NK_27%2B11b-_BM"=>"NK_27+11b-_BM",
		"NK_27%2B11b%2B_BM"=>"NK_27+11b+_BM",
		"NK_27-11b%2B_Sp"=>"NK_27-11b+_Sp",
		"NK_27%2B11b-_Sp"=>"NK_27+11b-_Sp",
		"NK_27%2B11b%2B_Sp"=>"NK_27+11b+_Sp",
		"MF_226%2BII%2B480lo_PC"=>"MF_226+II+480lo_PC",
		"MF_Alv_Lu"=>"MF_Alv_Lu",
		"MF_Fem_PC"=>"MF_Fem_PC",
		"MF_102%2B480%2B_PC"=>"MF_102+480+_PC",
		"MF_microglia_CNS"=>"MF_microglia_CNS",
		"MF_PC"=>"MF_PC",
		"MF_pIC_Alv_Lu"=>"MF_pIC_Alv_Lu",
		"MF_RP_Sp"=>"MF_RP_Sp",
		"MF_SI"=>"MF_SI",
		"Mo_6C-II-_Bl"=>"Mo_6C-II-_Bl",
		"Mo_6C%2BII-_Bl"=>"Mo_6C+II-_Bl",
		"LTHSC_34-_BM"=>"LTHSC_34-_BM",
		"LTHSC_34%2B_BM"=>"LTHSC_34+_BM",
		"MMP3_48%2B_BM"=>"MMP3_48+_BM",
		"MMP4_135%2B_BM"=>"MMP4_135+_BM",
		"STHSC_150-_BM"=>"STHSC_150-_BM",
		"BEC_SLN"=>"BEC_SLN",
		"Ep_MEChi_Th"=>"Ep_MEChi_Th",
		"FRC_CD140a%2B_Madcam-_CD35-_SLN"=>"FRC_CD140a+_Madcam-_CD35-_SLN",
		"LEC_SLN"=>"LEC_SLN",
		"IAP_SLN"=>"IAP_SLN"
	);
	
	$group_info = array();
	foreach ($all as $name=>$file) {
   		if( in_array($name, $array)) {
   			array_push($group_info, $file);
   		}
   	}
   	
	$host = 'mysql.cl.med.harvard.edu';
	$user = 'rsimmgenweb';
	$pass = 'OilnemRaGrighViukap3';
	$db = 'rstatsimmgen';
	$gene_table = 'ImmGen_ATACseq_refGene_mm10_info';
	$peak_table = 'ImmGen_ATACseq_peak_info';
	$TF_table = 'ImmGen_ATACseq_peak_TFs';
	$density_table = 'ImmGen_ATACseq_peak_density';
	
	$con = mysql_connect($host, $user, $pass) or die("Can not connect." . mysql_error());
	$db_selected = mysql_select_db($db, $con);
	
	if($tss < $end) {
		$query = "SELECT p.peak_id, p.chr, p.start, p.end,  CAST(((p.start+p.end)/2-".$tss.") AS SIGNED), CAST(((p.start+p.end)/2-".$end.") AS SIGNED), t.motif_id, t.TF_name, t.FIMO_score, t.FIMO_pvalue, d.`".implode("`, d.`",$group_info)."` FROM ".$peak_table." AS p, ".$TF_table." AS t, ".$density_table." AS d WHERE p.peak_id = t.peak_id AND p.peak_id = d.peak_id AND p.chr = '".$chr."' AND p.start > ".($tss-$offset)." AND p.end < ".($end+$offset);    
	}
	else {
		$query = "SELECT p.peak_id, p.chr, p.start, p.end,  CAST((".$tss."-(p.start+p.end)/2) AS SIGNED), CAST((".$end."-(p.start+p.end)/2) AS SIGNED), t.motif_id, t.TF_name, t.FIMO_score, t.FIMO_pvalue, d.`".implode("`, d.`",$group_info)."` FROM ".$peak_table." AS p, ".$TF_table." AS t, ".$density_table." AS d WHERE p.peak_id = t.peak_id AND p.peak_id = d.peak_id AND p.chr = '".$chr."' AND p.start > ".($end-$offset)." AND p.end < ".($tss+$offset);    		
	}
	//echo $query;                                                                    
	$result = mysql_query($query,$con); 
   	
	//$json = array();
	//
        //while ($r = mysql_fetch_row($result)) {
	//	array_push($json, array('peak_id' => $r[0], 'chr' => $r[1], 'start' => intval($r[2]), 'end' => intval($r[3]), 'distance' => intval($r[4]), 'motif_id' => $r[5], 'FIMO_score' => $r[6], 'FIMO_pvalue' => $r[7], 'TF_name' => $r[8]));	
	//} 
	
	//echo json_encode($json); 
	
	$filename = "peak_table.csv";
	$delimiter = ",";
	
	// output headers so that the file is downloaded rather than displayed
	 //ob_clean();
	 header('Content-Type: application/csv');
	 header('Content-Disposition: attachment;filename='.$filename); 
	
	// create a file pointer connected to the output stream
	$output = fopen('php://output', 'w');
	
	$headers = array('Peak ID', 'Chr', 'Peak Start', 'Peak End', 'Distance to query gene TSS (bp)', 'Distance to query gene end (bp)', 'Motif ID', 'TF Name', 'FIMO Score', 'FIMO P-value');
	$outnames = array_merge($headers, $group_info);
	// output the column headings
	fputcsv($output, $outnames);
	//echo $filename; 
	
	// loop over the rows, outputting them
	while ($row = mysql_fetch_row($result)) {
		fputcsv($output, $row);
	}
	exit;
	//fclose($output);
	//ob_flush();
	//$zip = new ZipArchive;
	//$zip_file = './tmp/peak_tables.zip';
	//if ($zip->open($zip_file, ZipArchive::OVERWRITE) === TRUE)
	//{
	//    foreach ($all as $name=>$file) {
	//    	    if( in_array($name, $array)) {
	//    	    	   $zip->addFile('./peaks/'.$file.'.nucfree.macs2_peaks.xls'); 
	//    	    }
	//    }	 
	//    // All files are added, so close the zip file.
	//    $zip->close();
	//}
	////echo 'Archive created!';
	//// output headers so that the file is downloaded rather than displayed
	//header('Content-type: application/zip');
	//header('Content-disposition: attachment; filename=peak_tables.zip');
	//header("Content-Length: " . filesize($zip_file));
	//header("Pragma: no-cache");
	//header("Expires: 0");
	//
	//ob_end_flush();
	//readfile($zip_file);
	//unlink($zip_file);
	
?>
