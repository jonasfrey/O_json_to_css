import {f_evaluate_object} from "https://deno.land/x/f_evaluate_object@0.1/f_evaluate_object.module.js"

var o_json_to_css = {
    o_functions: {
        f_s_color_to_rgba(o_color){
            return `rgba(${o_color.r},${o_color.g},${o_color.b},${o_color.alph})`
        }
    },
    o_themes: {
        o_dark: {
            o_colors: {
                "o_background": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_foreground": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_alpha": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_beta": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_gamma": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_red": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_green": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_blue": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
            }
        }, 
        o_light: {
            o_colors: {
                "o_background": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_foreground": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_alpha": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_beta": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_gamma": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_red": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_green": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
                "o_blue": {
                    r: 0, 
                    g: 0, 
                    b: 0, 
                    alpha: 0,
                },
            }
        }
    },
    o_css: {
        o_ruleset: 
        {
            "s_selector": " body", 
            o_rules:{
                    "font-size": "1.2rem"
                },
            a_o_ruleset: [
                {
                    "s_selector": " .theme_dark", 
                    o_rules:{
                            "background-color": "${o_functions.f_s_color_to_rgba(o_themes.o_dark.o_colors.o_background)}"
                        },
                },
                {
                    "s_selector": " .theme_light", 
                    o_rules:{
                            "background-color": "${o_functions.f_s_color_to_rgba(o_themes.o_light.o_colors.o_background)}"
                        },
                }
            ]
        }
        
    }
}


const returnedTarget = Object.assign(target, source);

var o_json_to_css_original = Object.assign({}, o_json_to_css);

var f_s_css_rendered = async function(){

    await f_evaluate_object(o_json_to_css,o_json_to_css)
    var a_s_css = []
    var s_css = f_push_css_by_o_ruleset(o_json_to_css.o_css.o_ruleset, {s_selector : ""}, a_s_css)
    
    return s_css
}

var f_push_css_by_o_ruleset = function(o, o_parent = null, a_s_css){
    var s_css = `${o_parent.s_selector}${o.s_selector}{${o.o_rules.map((s_prop_name,s_value)=>`${s_prop_name}:${s_value}`).join(";")}}`
    if(o.a_o_ruleset){
        for(var n_i in o.a_o_ruleset){
            f_push_css_by_o_ruleset(o.a_o_ruleset[n_i], o, a_s_css)
        }
    }
    a_s_css.push(s_css);
}



export { o_json_to_css, f_s_css_rendered }