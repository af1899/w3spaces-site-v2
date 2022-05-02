// ***** TABLE FILTER FEATURE *****

// Credits to W3Schools.com for creating this HOWTO, I adjusted their code to be generical so no more identical functions have to be made.

function filter_table(text_input_id,table_id,td_array_num){
	var input, filter, table, tr, td, i;
	input = document.getElementById(text_input_id);
	filter = input.value.toUpperCase();
	table = document.getElementById(table_id);
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[td_array_num];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
				}
			else {
				tr[i].style.display = "none";
			}
		}
	}
}

// ***** DROPDOWN FEATURE *****

// Again, credit to W3Schools.com for their helpful HOWTOs.

function show_dropdown_content(id_content) {
    document.getElementById(id_content).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.droplist')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// ***** SKILL BROWSER

// This will be allocated to its own file if more filters like this are needed.

var i = $('#fs');

function available()	{ i.css("border","none"); 					}
function unavailable()	{ i.css("border","1px dashed red"); 		}
function unavailable2()	{ i.css("border","1px dashed #aa00ff"); 	}
function unavailable3()	{ i.css("border","1px dashed #00ffff");		}
function disable_form()	{ i.prop("disabled",true);					}

function bold_check(){
    if ($('#fi1').html()=="<b>Weapons</b>") $('#fi1').html("<a href=\"#skill_list\" onclick=\"apply_filter(0)\">Weapons</a>");
    if ($('#fi2').html()=="<b>Assists</b>") $('#fi2').html("<a href=\"#skill_list\" onclick=\"apply_filter(1)\">Assists</a>");
    if ($('#fi3').html()=="<b>Specials</b>") $('#fi3').html("<a href=\"#skill_list\" onclick=\"apply_filter(2)\">Specials</a>");
    if ($('#fi4').html()=="<b>A-slot</b>") $('#fi4').html("<a href=\"#skill_list\" onclick=\"apply_filter(3)\">A-slot</a>");
    if ($('#fi5').html()=="<b>B-slot</b>") $('#fi5').html("<a href=\"#skill_list\" onclick=\"apply_filter(4)\">B-slot</a>");
    if ($('#fi6').html()=="<b>C-slot</b>") $('#fi6').html("<a href=\"#skill_list\" onclick=\"apply_filter(5)\">C-slot</a>");
}
function reset_skill_type_search() {
    i.val("");
    if (i.prop("disabled")==true)
        i.prop("disabled",false);
    
    bold_check();
    available();
}

function apply_filter(filter_no){
    bold_check();
    
    if(filter_no==0){
        i.val("WPN");
        $('#fi1').html("<b>Weapons</b>");
    }
    if(filter_no==1){
        i.val("AST");
        $('#fi2').html("<b>Assists</b>");
    }
    if(filter_no==2){
        i.val("SPL");
        $('#fi3').html("<b>Specials</b>");
    }
    if(filter_no==3){
        i.val("A_P");
        $('#fi4').html("<b>A-slot</b>");
    }
    if(filter_no==4){
        i.val("B_P");
        $('#fi5').html("<b>B-slot</b>");
    }
    if(filter_no==5){
        i.val("C_P");
        $('#fi6').html("<b>C-slot</b>");
    }
    
    filter_table('fs','skill_list',0);
    disable_form();
    unavailable();
}
function no_filter(){
    bold_check();
    reset_skill_type_search();
    filter_table('fs','skill_list',0);
    available();
}