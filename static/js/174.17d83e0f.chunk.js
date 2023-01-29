"use strict";(self.webpackChunkcurs_react_1=self.webpackChunkcurs_react_1||[]).push([[174],{3526:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(5671),o=r(3144),i=r(136),s=r(5716),u=r(2791),a=r(364),c=r(2338),l={img:"Users_img__qvLR-",container_item:"Users_container_item__TyFfa",img_container:"Users_img_container__ohrg7",btn:"Users_btn__W9Qn8",info:"Users_info__DDEru"},f=r(885),p=r(5987),g="Paginator_pagination__hlVLo",h="Paginator_pagination_item__2S1YW",d="Paginator_pagination_item_active__EiROD",v=r(184),m=["portionSize"],_=function(n){for(var e=n.portionSize,r=void 0===e?20:e,t=(0,p.Z)(n,m),o=Math.ceil(t.totalUsersCount/t.pageSize),i=[],s=1;s<=o;s++)i.push(s);var a=Math.ceil(o/r),c=(0,u.useState)(1),l=(0,f.Z)(c,2),_=l[0],w=l[1],y=(_-1)*r+1,P=_*r;return(0,v.jsxs)("div",{className:g,children:[_>1&&(0,v.jsx)("button",{onClick:function(){w(_-1)},children:"Prev"}),i.filter((function(n){return n>=y&&n<=P})).map((function(n){return(0,v.jsx)("span",{onClick:function(){t.onPageChanged(n)},className:"".concat(t.currentPage===n&&d," ").concat(h),children:n})})),a>_&&(0,v.jsx)("button",{onClick:function(){w(_+1)},children:"Next"})]})},w=r(4945),y=r(3504),P=["user"],j=function(n){var e=n.user,r=(0,p.Z)(n,P);return(0,v.jsxs)("div",{className:l.container_item,children:[(0,v.jsxs)("div",{className:l.img_container,children:[(0,v.jsx)(y.OL,{to:"/profile/"+e.id,children:(0,v.jsx)("img",{className:l.img,src:null!=e.photos.small?e.photos.small:w,alt:"avatar"})}),e.followed?(0,v.jsx)("button",{disabled:r.followingInProgress.some((function(n){return n===e.id})),onClick:function(){r.unfollow(e.id)},children:"Unfollow"}):(0,v.jsx)("button",{disabled:r.followingInProgress.some((function(n){return n===e.id})),onClick:function(){r.follow(e.id)},children:"Follow"})]}),(0,v.jsxs)("div",{className:l.info,children:[(0,v.jsxs)("div",{className:l.info_name_status,children:[(0,v.jsx)("h2",{children:e.name}),(0,v.jsx)("p",{children:e.status})]}),(0,v.jsx)("div",{className:l.info_location,children:(0,v.jsxs)("h3",{children:["u.location.country",", ","u.location.city"]})})]})]})},x=function(n){return(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{children:"Users"}),(0,v.jsxs)("div",{className:l.container,children:[(0,v.jsx)(_,{currentPage:n.currentPage,onPageChanged:n.onPageChanged,totalUsersCount:n.totalUsersCount,pageSize:n.pageSize}),n.users.map((function(e){return(0,v.jsx)(j,{user:e,followingInProgress:n.followingInProgress,follow:n.follow,unfollow:n.unfollow},e.id)}))]})]})},C=r(6057),k="NOT_FOUND";var U=function(n,e){return n===e};function b(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?U:t,i=r.maxSize,s=void 0===i?1:i,u=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),c=1===s?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:k},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return k}return{get:t,put:function(e,o){t(e)===k&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(s,a);function l(){var e=c.get(arguments);if(e===k){if(e=n.apply(null,arguments),u){var r=c.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}c.put(arguments,e)}return e}return l.clearCache=function(){return c.clear()},l}function S(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function z(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,s=0,u={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(u=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=u,l=c.memoizeOptions,f=void 0===l?r:l,p=Array.isArray(f)?f:[f],g=S(t),h=n.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),d};return o}var N=z(b),F=N((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),Z=function(n){return n.usersPage.pageSize},I=function(n){return n.usersPage.totalUsersCount},E=function(n){return n.usersPage.currentPage},A=function(n){return n.usersPage.isFetching},O=function(n){return n.usersPage.followingInProgress},D=r(7781),R=function(n){(0,i.Z)(r,n);var e=(0,s.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,v.jsxs)(v.Fragment,{children:[this.props.isFetching?(0,v.jsx)(C.Z,{}):null,(0,v.jsx)(x,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress})]})}}]),r}(u.Component),q=(0,D.qC)((0,a.$j)((function(n){return{users:F(n),pageSize:Z(n),totalUsersCount:I(n),currentPage:E(n),isFetching:A(n),followingInProgress:O(n)}}),{follow:c.ZN,unfollow:c.fv,setCurrentPage:c.D4,toggleFollowingProgress:c.ZH,getUsers:c.Rf}))(R)}}]);
//# sourceMappingURL=174.17d83e0f.chunk.js.map