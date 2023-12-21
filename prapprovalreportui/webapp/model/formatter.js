sap.ui.define([], function () {
	"use strict";
	return {
		Status: function (val) {
			if (val === "Approved" || val === "Executed") {
				return "Success";
			}
			else if (val === "Rejected" || val === "Not Executed") {
				return "Error"
			}
			else if (val === "Saved" || val === "Submitted" || val === "Submited") {
				return "Information"
			}
			else {
				return "Warning";
			}
		},
		StatusName: function (val) {
			if (val == null || val == "Not Executed") {
				return "Not Executed";
			}
			else {
				return "Executed";
			}
		},
		PayrollApprStatusName: function (val) {
			if (val == "Executed") {
				return "Executed";
			}
			else {
				return "Not Executed";
			}
		},
		PayCodeCount: function (val) {
			var count = 0;
			if (val!= null) {
				val.split("#").forEach(index => {
					if (index != '1000' && index !='' && index != null && index != "null" && index != undefined) {
						count++
					}
				})
			}
			return count;
		},
		StatusValue:function(status){
			var count = 0;
			if(status == null || status == ""){
				return "Warning";
			}
			else{
				status.split("#").forEach(index => {
					if (index != 'Approved') {
						count++;
					}
				})
			}
			if(count == 0){
				return "Success";
			}else{
				return "Warning";
			}
		},
		SaveSubmitStatusText:function(status){
			var count = 0;
			if(status == null || status == ""){
				return "Inprogress";
			}
			else{
				status.split("#").forEach(index => {
					if (index != 'Approved') {
						count++;
					}
				})
			}
			if(count == 0){
				return "Approved";
			}else{
				return "Inprogress";
			}
		},
		SickEditable:function(val,TotalHours,NewRecord){
			if(NewRecord == true){
				return true;
			}
			if((val == "2000" || val =="1140") && TotalHours !=""){
				return false;
			}
			else{
				return true;
			}
		},
		TotalHoursCalculation:function(paycode,val){
			if(val !=="" && val != null && val != "null" && val != undefined){
				var hours = 0;
				if(paycode != '1095' && paycode != '1225' && paycode != 'BOA' && paycode != 'BT' && paycode != 'BSP' && paycode != 'BN' && paycode != '1230' && paycode != '1070'){
					val.split("#").forEach(index => {
						if (index != '') {
							hours += Number(index);
						}
					})
					return hours;
				}
			}
		}
	};
});
