- [ ] What problem does the context API help solve?
##### Answer: It helps avoid passing props down to components that do not need them just to get the props to their child components.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
##### Answer: actions == event handlers, reducers == helper function(s) based on "event" as described/passed by action, store == the Redux State that the reducer replaces due to it being immutable...  The store known as a 'single source of truth' because the logic of Redux is that immutable is better than mutable, so this is stattic until replaced in Reduc and therefor free of mutation.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?
##### Answer: The main difference would be default Scope of the State, in that Application state is Global and can be passed down to all children using props/props drilling to follow; while Component state by default is native to that Component and only accessible to itself and the children it passes it to... The best use depends on the flow of the app. If the State is only used in this Component for statful logic it may be better to use Component state over App State in that case; that being said much of this Sprint was about covering ways to over come this PASS DOWN SCOPE limitation of State... so it is more a degree of "best practices" Vs "coder logic/preference" in practice.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
##### Answer: "redux-thunk" is a middle-ware that lets the reducer play nice with functions, as reducers will not accept functions, so thunk deals with that. This is "it change our `action-creators`" in that it lets them have logic to run asyinc operations like an API call... Expaning the functionality of Redux state management limitations.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!
##### Answer: Honestly so far I prefer Hooks + Context, because hooks are indirectly mutable and open ended in the logic order of operations, and combined with Context you can over come most scope/props drilling limitations in a more modular way than you can with Class Components or Redux.
