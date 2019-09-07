function calculate()
{var v_cpu=parseInt(jQuery("input#cpu").val());var v_ram=parseInt(jQuery("input#ram").val())/1024;var v_disk=parseInt(jQuery("input#disk").val());var v_ip=parseInt(jQuery("input#ip").val());if(v_cpu&&v_ram&&v_disk&&v_ip)
{var h_total,m_total;var m_dpoint=2;var h_dpoint=5;var h_inmonth=744;var p_cpu=0.0015;var p_ram=0.00119;var p_disk=8.0E-5;var p_ssd=0;var p_ip=0.00069;if(v_cpu>1||v_ram>3){p_ram=parseFloat((p_ram*2.10000).toFixed(5));}
var ui_cpu=jQuery("span#cpu-price");var ui_ram=jQuery("span#ram-price");var ui_disk=jQuery("span#disk-price");var ui_ip=jQuery("span#ip-price");var h_cpu=parseFloat((v_cpu*p_cpu).toFixed(h_dpoint));var h_ram=parseFloat((v_ram*p_ram).toFixed(h_dpoint));var h_disk=parseFloat((v_disk*p_disk).toFixed(h_dpoint));var h_ip=parseFloat((v_ip*p_ip).toFixed(h_dpoint));var ui_month=jQuery("span#final-month-price");var ui_hour=jQuery("span#final-hour-price");ui_cpu.html(h_cpu);ui_ram.html(h_ram);ui_disk.html(h_disk);ui_ip.html(h_ip);h_total=parseFloat((h_cpu+h_ram+h_disk+h_ip).toFixed(h_dpoint));m_total=parseFloat((h_total*h_inmonth).toFixed(m_dpoint));ui_month.html(m_total);ui_hour.html(h_total);}}
jQuery(document).ready(function(){calculate();jQuery('.number').keypress(function(){var pressed=event.charCode?event.charCode:event.keyCode;if(pressed==46||pressed==101||pressed==45||pressed==43)
{event.preventDefault();return false;}});jQuery('.number').change(function(a){var max=parseInt(jQuery(this).attr('max'));var min=parseInt(jQuery(this).attr('min'));var step=parseInt(jQuery(this).attr('step'));var depend=jQuery(this).data('depend');if(jQuery(this).val()>max)
{jQuery(this).val(max);}
else if(jQuery(this).val()<min)
{jQuery(this).val(min);}
if(depend)
{var depend_step=jQuery(this).data('depend-step');var depend_stepby=jQuery(this).data('depend-stepby');if(depend_step&&depend_stepby)
{dependby=jQuery(this).data('dependby')*depend_stepby;}
else
{var dependby=jQuery(this).data('dependby');}
var n_min=Math.round(jQuery(this).val()*dependby);var d_step=jQuery("input#"+depend).attr('step');n_min=Math.round(n_min/d_step)*d_step;jQuery("#"+depend+" #min-"+depend).html(n_min);jQuery("input#"+depend).attr("min",n_min);if(jQuery("input#"+depend).val()<n_min)
{jQuery("input#"+depend).val(n_min);}}
if(step)
{jQuery(this).val(Math.round(jQuery(this).val()/step)*step);}
calculate();});jQuery('.number').keyup(function(){calculate();});});