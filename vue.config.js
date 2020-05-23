/**
* <publicPath>
* 루트 디렉토리로 사용할 곳 지정

* <devServer>
* host : devMode 실행시킬 ip 선택 localhost가 기본
* hot : web pack의 hot reloading에 관여
* disableHostCheck : devMode에서 HostCheck 여부
@ author : goseungduk
@ version : 1.0.0
*/
module.exports = {
	publicPath: '',
	devServer: { 
		host: '0.0.0.0', 
		hot: true, 
		disableHostCheck: true 
	}
}