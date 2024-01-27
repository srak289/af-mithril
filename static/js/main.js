import 'mithril'

let root = document.body

let count = 0

let SplashComponent = {
    view: function() {
        count = 0
        return m("main", [
            m("h1", {class: "title"}, "Airforce Academy"),
            m("a", {href: "#!/main"}, "Join up!")
        ])
    }
}

let Numbers = ["Zerp", "Onep", "Toop", "Treep", "Fawrp", "Fipe", "Ficks", "Seppen", "Ape", "Nipe"]

let Text = function() {
    let t = count
    let s = ''
    while (t >= 10){
        let num = Numbers[Math.floor(t/10)] 
        s = s + num + ((num.charAt(num.length-1) == 'e') ? 'y' : 'ey')
        t = t % 10
    }
    s = s + Numbers[t]
    return s
}

let MainComponent = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Recruits, count-OFF!"),
            m("h3", {class: "count"}, Text()),
            m(
                "button",
                {onclick: function() {count++}},
                "Count!"
            ),
            m("br"),
            m("a", {href: "#!/splash"}, "Retire")
        ])
    }
}

m.route(root, "/splash", {
    "/splash":SplashComponent,
    "/main":MainComponent,
})
