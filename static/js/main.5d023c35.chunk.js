(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(22),s=n.n(i),c=n(11),o=n(16),u=n(3),l=n(4),d=n(6),j=n(5),h=n(8),b=n(2),m=n.n(b),p=n(7),f=n(14),O="user",g=function(t){return localStorage.setItem(O,JSON.stringify(t))},v=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},x=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(O));null===e&&(e={}),v(e)(t)}))},k=function(t){return new Promise((function(e){g(Object(o.a)(Object(o.a)({},{name:"",email:"",image:"",description:""}),t)),v("OK")(e)}))},N=function(t){return new Promise((function(e){g(Object(o.a)({},t)),v("OK")(e)}))},y=(n(31),n(32),n(0)),S=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("p",{className:"loading",children:"Carregando..."})}}]),n}(a.Component),w=S,C=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={loading:!0,user:""},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:e=t.sent,this.setState({loading:!1,user:e.name,userImg:e.image});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.user,a=t.userImg;return Object(y.jsxs)("header",{"data-testid":"header-component",children:[Object(y.jsx)("h1",{children:"TrybeTunes"}),Object(y.jsxs)("nav",{children:[Object(y.jsx)(c.b,{to:"/search","data-testid":"link-to-search",children:"Pesquisa"}),Object(y.jsx)(c.b,{to:"/favorites","data-testid":"link-to-favorites",children:"Favoritas"}),Object(y.jsx)(c.b,{to:"/profile","data-testid":"link-to-profile",children:"Perfil"})]}),Object(y.jsx)("div",{className:"header-profileContainer",children:e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:"header-profile-img",src:"/default-profile.jpeg",alt:""}),Object(y.jsx)(w,{})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:"header-profile-img",src:a,alt:""}),Object(y.jsx)("p",{"data-testid":"header-user-name",children:n})]})})]})}}]),n}(a.Component),I=C,L=n(25),F="favorite_songs";JSON.parse(localStorage.getItem(F))||localStorage.setItem(F,JSON.stringify([]));var B=function(){return JSON.parse(localStorage.getItem(F))},D=function(t){return localStorage.setItem(F,JSON.stringify(t))},E=function(t){return function(e){setTimeout((function(){e(t)}),500)}},P=function(){return new Promise((function(t){var e=B();E(e)(t)}))},A=function(t){return new Promise((function(e){if(t){var n=B();D([].concat(Object(L.a)(n),[t]))}E("OK")(e)}))},J=function(t){return new Promise((function(e){var n=B();D(n.filter((function(e){return e.trackId!==t.trackId}))),E("OK")(e)}))},U=(n(42),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"handleFavorite",value:function(){var t=Object(p.a)(m.a.mark((function t(e){var n,a,r,i,s,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target,a=this.props,r=a.track,i=a.toggleLoadingHandler,s=a.updateHandler,c=!n.checked,i(),!c){t.next=9;break}return t.next=7,J(r);case 7:t.next=11;break;case 9:return t.next=11,A(r);case 11:return t.next=13,s();case 13:i();case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props,n=e.track,a=e.favoritesList,r=e.showArtwork,i=n.trackName,s=n.trackId,c=n.previewUrl,o=n.artworkUrl30,u=n.collectionName;return Object(y.jsxs)("div",{className:"songContainer",children:[r&&Object(y.jsx)("img",{src:o,alt:u,className:"songcard-img"}),Object(y.jsx)("h4",{children:i}),Object(y.jsxs)("audio",{"data-testid":"audio-component",src:c,controls:!0,children:[Object(y.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(y.jsx)("code",{children:"audio"}),"."]}),Object(y.jsxs)("label",{htmlFor:"check-".concat(s),children:[Object(y.jsx)("input",{id:"check-".concat(s),type:"checkbox",className:"favoriteCheck","data-testid":"checkbox-music-".concat(s),onChange:function(e){return t.handleFavorite(e,s)},checked:a.some((function(t){return t.trackId===s}))}),"Favorita"]})]})}}]),n}(a.Component));U.defaultProps={showArtwork:!1};var H=U,M=function(){var t=Object(p.a)(m.a.mark((function t(e){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=M,K=(n(43),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={musicList:[],loading:!0,favoritesList:[]},t.toggleLoading=t.toggleLoading.bind(Object(f.a)(t)),t.updateFavoriteSongs=t.updateFavoriteSongs.bind(Object(f.a)(t)),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(m.a.mark((function t(){var e,n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match,n=e.params.id,t.next=4,T(n);case 4:a=t.sent,this.setState({musicList:a,loading:!1}),this.updateFavoriteSongs();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateFavoriteSongs",value:function(){var t=Object(p.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,this.setState({favoritesList:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"toggleLoading",value:function(){this.setState((function(t){return{loading:!t.loading}}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.musicList,a=e.loading,r=e.favoritesList;return Object(y.jsxs)("div",{"data-testid":"page-album",children:[Object(y.jsx)(I,{}),Object(y.jsx)("div",{className:"albumContainer",children:a?Object(y.jsx)(w,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"albumInfo",children:[Object(y.jsx)("img",{src:n[0].artworkUrl100,alt:""}),Object(y.jsx)("h2",{"data-testid":"album-name",children:n[0].collectionName}),Object(y.jsx)("h3",{"data-testid":"artist-name",children:n[0].artistName})]}),Object(y.jsx)("div",{className:"songsListContainer",children:n.map((function(e,n){return n>0&&Object(y.jsx)(H,{track:e,toggleLoadingHandler:t.toggleLoading,favoritesList:r,updateHandler:t.updateFavoriteSongs},e.trackId)}))})]})})]})}}]),n}(a.Component)),z=K,Z=(n(44),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={loading:!1,favoritesList:[]},t.toggleLoading=t.toggleLoading.bind(Object(f.a)(t)),t.updateFavoriteSongs=t.updateFavoriteSongs.bind(Object(f.a)(t)),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0},Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,t.setState({loading:!1,favoritesList:n});case 4:case"end":return e.stop()}}),e)}))))}},{key:"toggleLoading",value:function(){this.setState((function(t){return{loading:!t.loading}}))}},{key:"updateFavoriteSongs",value:function(){var t=Object(p.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("oi"),t.next=3,P();case 3:e=t.sent,this.setState({favoritesList:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.favoritesList,a=e.loading;return Object(y.jsxs)("div",{"data-testid":"page-favorites",children:[Object(y.jsx)(I,{}),Object(y.jsx)("div",{className:"favoritesContainer",children:a?Object(y.jsx)(w,{}):Object(y.jsxs)(y.Fragment,{children:[n.map((function(e){return Object(y.jsx)(H,{track:e,favoritesList:n,toggleLoadingHandler:t.toggleLoading,updateHandler:t.updateFavoriteSongs,showArtwork:!0},e.trackId)})),!n.length&&Object(y.jsx)("p",{children:"Nenhuma m\xfasica favoritada"})]})})]})}}]),n}(a.Component)),q=Z,R=(n(45),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={name:"",isButtonDisabled:!0,isLoggedIn:!1,loading:!1},t}return Object(l.a)(n,[{key:"handleChange",value:function(t){var e=t.target;this.setState((function(){return{name:e.value,isButtonDisabled:e.value.length<3}}))}},{key:"handleSubmit",value:function(t){var e=this,n=this.state.name;t.preventDefault(),this.setState({loading:!0},Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k({name:n,image:"/default-profile.jpeg"});case 2:e.setState({loading:!1,isLoggedIn:!0});case 3:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.isButtonDisabled,r=e.isLoggedIn,i=e.loading;return Object(y.jsxs)("div",{className:"loginContainer",children:[Object(y.jsx)("img",{src:"/logo-trybetunes.png",alt:"",className:"logo"}),Object(y.jsxs)("div",{"data-testid":"page-login",className:"loginFormContainer",children:[!0===i?Object(y.jsx)(w,{}):Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{type:"text",onChange:function(e){return t.handleChange(e)},"data-testid":"login-name-input",value:n,placeholder:"Nome"}),Object(y.jsx)("button",{type:"submit",onClick:function(e){return t.handleSubmit(e)},"data-testid":"login-submit-button",disabled:a,children:"Entrar"})]}),r&&Object(y.jsx)(h.a,{to:"/search"})]})]})}}]),n}(a.Component)),_=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{"data-testid":"page-not-found",children:"NotFound"})}}]),n}(a.Component),$=_,G=(n(46),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={userName:"",userEmail:"",userBio:"",userImg:"",loading:!1},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0},Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,t.setState({userName:n.name,userEmail:n.email,userBio:n.description,userImg:n.image,loading:!1});case 4:case"end":return e.stop()}}),e)}))))}},{key:"render",value:function(){var t=this.state,e=t.userName,n=t.userEmail,a=t.userBio,r=t.userImg,i=t.loading;return Object(y.jsxs)("div",{"data-testid":"page-profile",children:[Object(y.jsx)(I,{}),Object(y.jsx)("div",{className:"profileContainer",children:i?Object(y.jsx)(w,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"profile-row",children:[Object(y.jsx)("img",{src:r,className:"profile-img",alt:"","data-testid":"profile-image"}),Object(y.jsx)(c.b,{to:"/profile/edit",className:"edit-btn",children:"Editar perfil"})]}),Object(y.jsx)("h4",{children:"Nome"}),Object(y.jsx)("p",{children:e}),Object(y.jsx)("h4",{children:"E-mail"}),Object(y.jsx)("p",{children:n||"Nenhum e-mail cadastrado"}),Object(y.jsx)("h4",{children:"Descri\xe7\xe3o"}),Object(y.jsx)("p",{children:a||"Nenhuma descri\xe7\xe3o cadastrada"})]})})]})}}]),n}(a.Component)),Q=n(18),V=(n(47),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={userName:"",userEmail:"",userBio:"",userImg:"",loading:!1,isButtonDisabled:!0,isInfoSaved:!1},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0},Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,t.setState({userName:n.name,userEmail:n.email,userBio:n.description,userImg:n.image,loading:!1},t.validateButton);case 4:case"end":return e.stop()}}),e)}))))}},{key:"handleChange",value:function(t){var e=t.target;this.setState(Object(Q.a)({},e.name,e.value),this.validateButton)}},{key:"handleSubmit",value:function(){var t=Object(p.a)(m.a.mark((function t(e){var n,a,r,i,s,c,o=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.state,a=n.userName,r=n.userEmail,i=n.userBio,s=n.userImg,c={name:a,email:r,description:i,image:s},e.preventDefault(),this.setState({loading:!0},Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(c);case 2:o.setState({isInfoSaved:!0});case 3:case"end":return t.stop()}}),t)}))));case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"validateButton",value:function(){var t=this.state,e=t.userName,n=t.userEmail,a=t.userBio,r=t.userImg,i=e.length>0&&n.length>0&&a.length>0&&r.length>0,s=/[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/.test(n);this.setState({isButtonDisabled:!(s&&i)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.userName,a=e.userEmail,r=e.userBio,i=e.userImg,s=e.loading,c=e.isButtonDisabled,o=e.isInfoSaved;return Object(y.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(y.jsx)(I,{}),Object(y.jsx)("div",{className:"profileEditContainer",children:s?Object(y.jsx)(w,{}):Object(y.jsxs)("form",{children:[Object(y.jsxs)("label",{htmlFor:"inputName",children:["Nome",Object(y.jsx)("input",{type:"text",value:n,name:"userName",id:"inputName",onChange:function(e){return t.handleChange(e)},"data-testid":"edit-input-name"})]}),Object(y.jsxs)("label",{htmlFor:"inputEmail",children:["E-mail",Object(y.jsx)("input",{type:"email",value:a,name:"userEmail",id:"inputEmail",onChange:function(e){return t.handleChange(e)},"data-testid":"edit-input-email"})]}),Object(y.jsxs)("label",{htmlFor:"inputBio",children:["Descri\xe7\xe3o",Object(y.jsx)("input",{type:"text",value:r,name:"userBio",id:"inputBio",onChange:function(e){return t.handleChange(e)},"data-testid":"edit-input-description"})]}),Object(y.jsxs)("label",{htmlFor:"inputImg",children:["Imagem de usu\xe1rio",Object(y.jsx)("input",{type:"text","data-testid":"edit-input-image",value:i,name:"userImg",id:"inputImg",onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsx)("button",{type:"submit","data-testid":"edit-button-save",disabled:c,onClick:function(e){return t.handleSubmit(e)},children:"Enviar"})]})}),o&&Object(y.jsx)(h.a,{to:"/profile"})]})}}]),n}(a.Component)),W=V,X=(n(48),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.album,e=t.artworkUrl100,n=t.collectionName,a=t.artistName,r=t.collectionId;return Object(y.jsxs)(c.b,{to:"/album/".concat(r),"data-testid":"link-to-album-".concat(r),className:"card",children:[Object(y.jsx)("img",{src:e,alt:""}),Object(y.jsx)("h3",{className:"albumTitle",children:n}),Object(y.jsx)("p",{className:"artistName",children:a})]})}}]),n}(a.Component)),Y=X,tt=function(){var t=Object(p.a)(m.a.mark((function t(e){var n,a,r,i,s,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,s=i.results,c=s.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),et=tt,nt=(n(49),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={artistName:"",artistSearched:"",isButtonDisabled:!0,loading:!0,albumsList:[]},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"handleChange",value:function(t){var e=t.target;this.setState({artistName:e.value,isButtonDisabled:e.value.length<2})}},{key:"handleSearch",value:function(t){var e=this,n=this.state.artistName;t.preventDefault(),this.setState({artistName:"",loading:!0},Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et(n);case 2:a=t.sent,e.setState({loading:!1,artistSearched:n,albumsList:a});case 4:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var t=this,e=this.state,n=e.artistName,a=e.artistSearched,r=e.albumsList,i=e.isButtonDisabled,s=e.loading;return Object(y.jsxs)("div",{"data-testid":"page-search",children:[Object(y.jsx)(I,{}),Object(y.jsx)("div",{className:"container",children:s?Object(y.jsx)(w,{}):Object(y.jsxs)("div",{className:"searchContainer",children:[Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{type:"text",onChange:function(e){return t.handleChange(e)},value:n,className:"searchArtistInput","data-testid":"search-artist-input",placeholder:"Nome do artista"}),Object(y.jsx)("button",{type:"submit",disabled:i,"data-testid":"search-artist-button",onClick:function(e){return t.handleSearch(e)},children:"Pesquisar"})]}),a&&Object(y.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(a)}),!r.length&&a?Object(y.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"}):Object(y.jsx)("div",{className:"cardsContainer",children:r.map((function(t){return Object(y.jsx)(Y,{album:t},t.collectionId)}))})]})})]})}}]),n}(a.Component)),at=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(h.d,{children:[Object(y.jsx)(h.b,{path:"/album/:id",render:function(t){return Object(y.jsx)(z,Object(o.a)({},t))}}),Object(y.jsx)(h.b,{path:"/search",component:nt}),Object(y.jsx)(h.b,{path:"/favorites",component:q}),Object(y.jsx)(h.b,{path:"/profile",component:G,exact:!0}),Object(y.jsx)(h.b,{path:"/profile/edit",component:W,exact:!0}),Object(y.jsx)(h.b,{path:"/",component:R,exact:!0}),Object(y.jsx)(h.b,{path:"/*",component:$})]})})}}]),n}(r.a.Component),rt=at;n(50);s.a.render(Object(y.jsx)(c.a,{children:Object(y.jsx)(rt,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.5d023c35.chunk.js.map