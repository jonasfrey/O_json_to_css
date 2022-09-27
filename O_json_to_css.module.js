
class O_json_to_css{
    constructor(
        o
    ){
        this.o = Object.assign({}, o)
        this.o_style_sheet = document.createElement("style")
        this.o_style_sheet.setAttribute("s_inserted_by", import.meta.url.split("/").pop());
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
        for(let s_selector of a_s_selector){
            var a_s_line = []
            for(var s_prop_name in o.o_rules){
                a_s_line.push(`${s_prop_name}:${o.o_rules[s_prop_name]};`)
            }
            for(let s_selector_parent of o_parent.s_selector.split(',')){
                var s_css = `${s_selector_parent}${s_selector}{${a_s_line.join("\n")}}`
                a_s_css.push(s_css);
            }
            console.log(`${o_parent.s_selector}${s_selector}`)

            if(o.a_o_ruleset){
                for(var n_i in o.a_o_ruleset){
                    this.f_push_css_by_o_ruleset(o.a_o_ruleset[n_i], o, a_s_css)
                }
            }
        }

    }

    async f_render(){
        await this.f_evaluate()
        var s_css = await this.f_s_css_rendered();
        console.log(s_css)
        this.o_style_sheet.innerHTML = s_css
    }

}