import iHeader from "./iHeader"
import iContent from "./iContent"
import iFooter from "./iFooter"
import iScreen from "./iScreen"
import iBanner from "./iBanner"
import iThing from "./iThing"
import iRelease from "./iRelease"
import iListBtn from "./iListBtn"
import iBalance_do from "./iBalance_do"
import iSet from "./iSet"
import iSet_sub from "./iSet_sub"
import iSwitch from "./iSwitch"

const components={
	iHeader,
	iContent,
	iFooter,
	iScreen,
	iBanner,
	iThing,
	iRelease,
	iListBtn,
	iBalance_do,
	iSet,
	iSet_sub,
	iSwitch
}

export default {
	install(Vue,option){
		Object.keys(components).map(k=>{
			Vue.component(components[k].name,components[k])
		})
	}
}
