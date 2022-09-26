import {f_evaluate_object} from "https://deno.land/x/f_evaluate_object@0.1/f_evaluate_object.module.js"

class O_json_to_css{
    constructor(
        o
    ){
        this.o = Object.assign({}, o)
        this.o_style_sheet = document.createElement("style")
        this.o_style_sheet.setAttribute("id", "o_json_to_css");
        document.head.appendChild(this.o_style_sheet)
    }
    
    async f_evaluate(){
        this.o_evaluated = Object.assign({}, this.o)
        await f_evaluate_object(this.o_evaluated, this.o_evaluated);
        console.log(this.o_evaluated)

    }

    async f_s_css_rendered(){
        var a_s_css = []
        this.f_push_css_by_o_ruleset(this.o_evaluated.o_css.o_ruleset, {s_selector : ""}, a_s_css)
        
        return Promise.resolve(a_s_css.join("\n"));
    }

    async f_push_css_by_o_ruleset(o, o_parent = null, a_s_css){
        // var s_css = `${o_parent.s_selector}${o.s_selector}{${o.o_rules.map((s_prop_name,s_value)=>`${s_prop_name}:${s_value}`).join(";")}}`
        var a_s_selector = o.s_selector.split(',');
        for(var s_selector of a_s_selector){

            var a_s_line = []
            for(var s_prop_name in o.o_rules){
                a_s_line.push(`${s_prop_name}:${o.o_rules[s_prop_name]};`)
            }
            var s_css = `${o_parent.s_selector}${o.s_selector}{${a_s_line.join("\n")}}`

            if(o.a_o_ruleset){
                for(var n_i in o.a_o_ruleset){
                    this.f_push_css_by_o_ruleset(o.a_o_ruleset[n_i], o, a_s_css)
                }
            }
            a_s_css.push(s_css);
        }

    }

    async f_render(){
        await this.f_evaluate()
        var s_css = await this.f_s_css_rendered();
        console.log(s_css)
        this.o_style_sheet.innerText = s_css
    }

}
export {O_json_to_css}

// usage
// var o = {
//     o_functions: {
//         f_s_color_to_rgba(o_color){
//             return `rgba(${o_color.r},${o_color.g},${o_color.b},${o_color.alpha})`
//         }
//     },
//     o_themes: {
//         o_dark: {
//             o_colors: {
//                 "o_background": {
//                     r: 22, 
//                     g: 22, 
//                     b: 22, 
//                     alpha: 0.9,
//                 },
//                 "o_foreground": {
//                     r: 222, 
//                     g: 222, 
//                     b: 222, 
//                     alpha: 0.9,
//                 },
//                 "o_alpha": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_beta": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_gamma": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_red": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_green": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_blue": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//             }
//         }, 
//         o_light: {
//             o_colors: {
//                 "o_background": {
//                     r: 222, 
//                     g: 222, 
//                     b: 222, 
//                     alpha: 0.9,
//                 },
//                 "o_foreground": {
//                     r: 22, 
//                     g: 22, 
//                     b: 22, 
//                     alpha: 0.9,
//                 },
//                 "o_alpha": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_beta": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_gamma": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_red": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_green": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//                 "o_blue": {
//                     r: 0, 
//                     g: 0, 
//                     b: 0, 
//                     alpha: 0.9,
//                 },
//             }
//         }
//     },
//     o_css: {
//         o_ruleset: 
//         {
//             "s_selector": " body", 
//             o_rules:{
//                     "font-size": "1.2rem"
//                 },
//             a_o_ruleset: [
//                 {
//                     "s_selector": " .theme_dark, .theme_dark2", 
//                     o_rules:{
//                             "background-color": "${o_functions.f_s_color_to_rgba(o_themes.o_dark.o_colors.o_background)}",
//                             "color": "${o_functions.f_s_color_to_rgba(o_themes.o_dark.o_colors.o_foreground)}"
//                         },
//                 },
//                 {
//                     "s_selector": " .theme_light", 
//                     o_rules:{
//                             "background-color": "${o_functions.f_s_color_to_rgba(o_themes.o_light.o_colors.o_background)}",
//                             "color": "${o_functions.f_s_color_to_rgba(o_themes.o_light.o_colors.o_foreground)}"
//                         },
//                 }
//             ]
//         }
        
//     }
// }

// var o_json_to_css = new O_json_to_css(o); 

// await o_json_to_css.f_render();
