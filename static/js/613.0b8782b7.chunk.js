"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{3613:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(4420),a=t(3634),i=t(7784),c=function(e){return e.contacts.isLoading},s=function(e){return e.contacts.error},u=t(3329),o=function(){var e=(0,r.v9)(s);return(0,u.jsx)("div",{children:e})},l="ContactForm_form__dhl+T",d="ContactForm_inputWrapper__9zhfJ",m=function(){var e=(0,r.I0)();return(0,u.jsxs)("form",{className:l,onSubmit:function(n){n.preventDefault();var t=n.currentTarget,r=t.elements.name.value,i=t.elements.number.value;e((0,a.uK)({name:r,number:i})),t.reset()},children:[(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name"}),(0,u.jsx)("input",{type:"text",id:"name",name:"name",pattern:"[a-zA-Z \\-']{2,30}",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("label",{htmlFor:"number",children:"Number"}),(0,u.jsx)("input",{type:"tel",id:"number",name:"number",pattern:"^\\+?[0-9 \\-\\(\\)]{7,20}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})},h={},f=t(1273),x=function(){var e=(0,r.I0)();return(0,u.jsxs)("div",{className:h.filter,children:[(0,u.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",id:"filter",name:"filter",onChange:function(n){e((0,f.T)(n.currentTarget.value))}})]})},j="Contact_item__j+P5X",p=function(e){var n=e.contact,t=(0,r.I0)();return(0,u.jsxs)("li",{className:j,children:[n.name,": ",n.number,(0,u.jsx)("button",{type:"button",onClick:function(){t((0,a.mP)(n))},children:"Edit"}),(0,u.jsx)("button",{type:"button",onClick:function(){t((0,a.GK)(n.id))},children:"Delete"})]})},b=(0,t(3553).P1)([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),v=function(){var e=(0,r.v9)(b);return(0,u.jsx)("ul",{children:e.map((function(e){return(0,u.jsx)(p,{contact:e},e.id)}))})},C=t(2791),_=t(4270);function y(){var e=(0,r.I0)(),n=(0,r.v9)(c),t=(0,r.v9)(s);return(0,C.useEffect)((function(){e((0,a.yF)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_.q,{children:(0,u.jsx)("title",{children:"Your contacts"})}),(0,u.jsxs)("div",{children:[n&&!t&&(0,u.jsx)(i.a,{}),(0,u.jsx)("h1",{children:"Phonebook"}),t&&(0,u.jsx)(o,{}),(0,u.jsx)(m,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(x,{}),(0,u.jsx)(v,{})]})]})]})}}}]);
//# sourceMappingURL=613.0b8782b7.chunk.js.map