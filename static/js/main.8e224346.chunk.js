(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),s=n(11),i=n.n(s),c=n(9),r=n(10),d=n(2),l=n(3),u=n(5),p=n(4),h=n(7),j=n.n(h),b=n(0),m=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={editing:!1},t.handleEditing=function(){t.setState({editing:!0})},t.handleUpdatedDone=function(e){"Enter"===e.key&&t.setState({editing:!1})},t}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){console.log("Cleaning up...")}},{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,o=e.id,a=e.title,s={},i={};return this.state.editing?s.display="none":i.display="none",Object(b.jsxs)("li",{className:j.a.item,children:[Object(b.jsx)("input",{type:"checkbox",className:j.a.checkbox,checked:n,style:i,onChange:function(){return t.props.handleChangeProps(o)}}),Object(b.jsxs)("div",{onDoubleClick:this.handleEditing,style:s,children:[Object(b.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(o)},children:"Delete"}),Object(b.jsx)("span",{style:n?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:a})]}),Object(b.jsx)("input",{type:"text",style:i,className:j.a.textInput,value:a,onChange:function(e){t.props.setUpdate(e.target.value,o)},onKeyDown:this.handleUpdatedDone})]})}}]),n}(a.a.Component),f=m,O=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)("ul",{children:this.props.todos.map((function(e){return Object(b.jsx)(f,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps,setUpdate:t.props.setUpdate},e.id)}))})}}]),n}(a.a.Component),g=O,x=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},v=n(6),y=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.handleSubmit=function(e){e.preventDefault(),t.state.title.trim()?(t.props.addTodoProps(t.state.title),t.setState({title:""})):alert("Please write item")},t.onChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),Object(b.jsx)("button",{className:"input-submit",children:"Submit"})]})}}]),n}(o.Component),S=y,C=n(20),k=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.setUpdate=function(e,n){t.setState({todos:t.state.todos.map((function(t){return t.id===n&&(t.title=e),t}))})},t.addTodoItem=function(e){var n={id:Object(C.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(r.a)(t.state.todos),[n])})},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed}):t}))}}))},t.delTodo=function(e){t.setState({todos:Object(r.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t,e){if(e.todos!==this.state.todos){var n=JSON.stringify(this.state.todos);localStorage.setItem("todos",n)}}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(x,{}),Object(b.jsx)(S,{addTodoProps:this.addTodoItem}),Object(b.jsx)(g,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo,setUpdate:this.setUpdate})]})})}}]),n}(a.a.Component),T=k;n(17);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={item:"TodoItem_item__3A9st",checkbox:"TodoItem_checkbox__ZKRii",textInput:"TodoItem_textInput__3Mc8b"}}},[[18,1,2]]]);
//# sourceMappingURL=main.8e224346.chunk.js.map