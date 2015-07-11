var _                       = require('underscore');
var Snap                    = require('../../../bower_components/snap.svg');
var React                   = require('react');
var ReactBootstrap          = require('react-bootstrap');
var Grid                    = ReactBootstrap.Grid;

var DartBoardActions = require('../actions/DartBoardActions');

var CibleSVG = <svg version="1.1" id="Cible" x="0px" y="0px" viewBox="0 0 589.893 589.893" enable-background="new 0 0 589.893 589.893" >
	<circle id="OuterBorder" fill="#231F20" cx="294.947" cy="294.947" r="294.972"/>
	<g>	

		<path className="Zone" data-zone="1"  data-mult="2" data-name="Double 1"  fill="#1AB689" d="M331.554,74.022c22.333,3.697,43.732,10.744,63.566,20.688l8.173-16.04 c-21.5-10.793-44.703-18.435-68.922-22.432L331.554,74.022z"/> 
		<path className="Zone" data-zone="2"  data-mult="2" data-name="Double 2"  fill="#E64C3B" d="M452.144,454.378c-15.794,15.599-33.974,28.925-54.079,39.352l8.175,16.044 c21.807-11.293,41.519-25.744,58.634-42.665L452.144,454.378z"/> 
		<path className="Zone" data-zone="3"  data-mult="2" data-name="Double 3"  fill="#E64C3B" d="M328.372,516.311c-22.756,3.439-45.237,3.324-66.879,0.06l-2.817,17.784 c23.462,3.551,47.839,3.679,72.512-0.063L328.372,516.311z"/> 
		<path className="Zone" data-zone="4"  data-mult="2" data-name="Double 4"  fill="#1AB689" d="M493.712,191.793l16.044-8.175c-11.293-21.797-25.74-41.501-42.657-58.609l-12.73,12.73 C469.962,153.526,483.286,171.697,493.712,191.793z" /> 
		<path className="Zone" data-zone="5"  data-mult="2" data-name="Double 5"  fill="#1AB689" d="M194.74,94.681c19.565-9.783,40.899-16.834,63.591-20.593l-2.816-17.781 c-24.61,4.063-47.742,11.711-68.949,22.33L194.74,94.681z"/> 
		<path className="Zone" data-zone="6"  data-mult="2" data-name="Double 6"  fill="#1AB689" d="M516.382,328.325l17.784,2.817c3.543-23.458,3.664-47.829-0.084-72.497l-17.781,2.816 C519.746,284.211,519.638,306.687,516.382,328.325z"/> 
		<path className="Zone" data-zone="7"  data-mult="2" data-name="Double 7"  fill="#E64C3B" d="M191.834,493.68c-19.879-10.334-38.125-23.597-54.091-39.316l-12.73,12.73 c17.302,17.052,37.087,31.433,58.648,42.626L191.834,493.68z"/> 
		<path className="Zone" data-zone="8"  data-mult="2" data-name="Double 8"  fill="#E64C3B" d="M94.663,395.119c-9.783-19.573-16.831-40.916-20.586-63.616l-17.781,2.816 c4.059,24.618,11.704,47.76,22.323,68.975L94.663,395.119z"/> 
		<path className="Zone" data-zone="9"  data-mult="2" data-name="Double 9"  fill="#1AB689" d="M80.179,183.649l16.04,8.173c10.331-19.87,23.588-38.109,39.3-54.069l-12.73-12.73 C105.744,142.32,91.37,162.097,80.179,183.649z"/> 
		<path className="Zone" data-zone="10" data-mult="2" data-name="Double 10" fill="#E64C3B" d="M515.878,331.515c-3.695,22.342-10.742,43.751-20.688,63.593l16.04,8.173 c10.796-21.508,18.438-44.721,22.431-68.949L515.878,331.515z"/> 
		<path className="Zone" data-zone="11" data-mult="2" data-name="Double 11" fill="#1AB689" d="M73.529,261.454l-17.784-2.817c-3.554,23.455-3.687,47.824,0.048,72.491l17.781-2.816 C70.142,305.563,70.262,283.089,73.529,261.454z"/> 
		<path className="Zone" data-zone="12" data-mult="2" data-name="Double 12" fill="#E64C3B" d="M137.799,135.465c15.791-15.586,33.965-28.9,54.062-39.318l-8.175-16.044 c-21.799,11.285-41.505,25.723-58.617,42.632L137.799,135.465z"/> 
		<path className="Zone" data-zone="13" data-mult="2" data-name="Double 13" fill="#E64C3B" d="M511.221,186.497l-16.044,8.175c9.793,19.566,16.852,40.904,20.617,63.599l17.781-2.816 C529.506,230.841,521.849,207.706,511.221,186.497z"/> 
		<path className="Zone" data-zone="14" data-mult="2" data-name="Double 14" fill="#E64C3B" d="M74.034,258.264c3.705-22.334,10.762-43.733,20.714-63.566l-16.04-8.173 c-10.802,21.499-18.454,44.702-22.458,68.922L74.034,258.264z"/> 
		<path className="ZoneClickable" data-zone="15" data-mult="2" data-name="Double 15" fill="#1AB689" d="M509.759,406.156l-16.04-8.173c-10.327,19.883-23.582,38.135-39.294,54.106l12.73,12.73 C484.2,447.511,498.573,427.721,509.759,406.156z"/> 
		<path className="ZoneClickable" data-zone="16" data-mult="2" data-name="Double 16" fill="#1AB689" d="M96.129,397.997l-16.044,8.175c11.285,21.808,25.726,41.524,42.64,58.643l12.73-12.73 C119.865,436.287,106.547,418.104,96.129,397.997z"/> 
		<path className="ZoneClickable" data-zone="17" data-mult="2" data-name="Double 17" fill="#1AB689" d="M395.187,495.195c-19.574,9.792-40.92,16.849-63.625,20.61l2.816,17.781 c24.623-4.065,47.767-11.72,68.983-22.347L395.187,495.195z"/> 
		<path className="ZoneClickable" data-zone="18" data-mult="2" data-name="Double 18" fill="#E64C3B" d="M397.995,96.181c19.875,10.324,38.119,23.573,54.085,39.279l12.73-12.73 c-17.303-17.039-37.086-31.406-58.642-42.589L397.995,96.181z"/> 
		<path className="ZoneClickable" data-zone="19" data-mult="2" data-name="Double 19" fill="#1AB689" d="M258.302,515.866c-22.343-3.703-43.751-10.759-63.593-20.714 l-8.173,16.04c21.507,10.805,44.719,18.456,68.949,22.458L258.302,515.866z"/> 
		<path className="ZoneClickable" data-zone="20" data-mult="2" data-name="Double 20" fill="#E64C3B" d="M261.521,73.583c22.743-3.437,45.212-3.324,66.842-0.066l2.817-17.784 c-23.451-3.546-47.815-3.671-72.475,0.069L261.521,73.583z"/> 
	</g>
	<g>	

		<path className="Zone" data-zone="1"  data-mult="1" data-name="1"  fill="#E6E7E8" d="M317.952,159.9c13.226,2.252,25.91,6.427,37.7,12.269l39.468-77.46 c-19.834-9.943-41.233-16.99-63.566-20.688L317.952,159.9z"/> 
		<path className="Zone" data-zone="2"  data-mult="1" data-name="2"  fill="#E6E7E8" d="M390.673,392.906c-9.411,9.212-20.19,17.114-32.082,23.351l39.474,77.472 c20.106-10.426,38.285-23.753,54.079-39.352L390.673,392.906z"/> 
		<path className="Zone" data-zone="3"  data-mult="1" data-name="3"  fill="#E6E7E8" d="M314.773,430.449c-13.493,1.977-26.826,1.922-39.678,0.043l-13.602,85.879 c21.642,3.264,44.124,3.379,66.879-0.06L314.773,430.449z"/> 
		<path className="Zone" data-zone="4"  data-mult="1" data-name="4"  fill="#E6E7E8" d="M416.24,231.267l77.472-39.474c-10.426-20.096-23.75-38.267-39.344-54.054l-61.471,61.471 C402.104,208.615,410.003,219.386,416.24,231.267z"/> 
		<path className="Zone" data-zone="5"  data-mult="1" data-name="5"  fill="#E6E7E8" d="M234.214,172.153c11.634-5.75,24.285-9.916,37.716-12.203l-13.599-85.862 c-22.692,3.759-44.026,10.81-63.591,20.593L234.214,172.153z"/> 
		<path className="Zone" data-zone="6"  data-mult="1" data-name="6"  fill="#E6E7E8" d="M430.504,314.723l85.879,13.602c3.256-21.638,3.364-44.114-0.08-66.864L430.44,275.06 C432.422,288.547,432.374,301.875,430.504,314.723z"/> 
		<path className="Zone" data-zone="7"  data-mult="1" data-name="7"  fill="#E6E7E8" d="M231.301,416.223c-11.761-6.184-22.577-14.048-32.087-23.329l-61.47,61.47 c15.966,15.719,34.212,28.981,54.091,39.316L231.301,416.223z"/> 
		<path className="Zone" data-zone="8"  data-mult="1" data-name="8"  fill="#E6E7E8" d="M172.136,355.645c-5.749-11.642-9.913-24.302-12.196-37.741l-85.862,13.599 c3.754,22.701,10.803,44.044,20.586,63.616L172.136,355.645z"/> 
		<path className="Zone" data-zone="9"  data-mult="1" data-name="9"  fill="#E6E7E8" d="M96.219,191.822l77.457,39.466c6.181-11.752,14.04-22.561,23.313-32.066l-61.47-61.47 C119.808,153.713,106.551,171.952,96.219,191.822z"/> 
		<path className="Zone" data-zone="10" data-mult="1" data-name="10" fill="#E6E7E8" d="M429.999,317.914c-2.249,13.235-6.425,25.928-12.269,37.727l77.46,39.468 c9.946-19.842,16.993-41.25,20.688-63.593L429.999,317.914z"/> 
		<path className="Zone" data-zone="11" data-mult="1" data-name="11" fill="#E6E7E8" d="M159.408,275.056l-85.879-13.602c-3.267,21.635-3.387,44.109,0.045,66.858l85.862-13.599 C157.466,301.227,157.527,287.902,159.408,275.056z"/> 
		<path className="Zone" data-zone="12" data-mult="1" data-name="12" fill="#E6E7E8" d="M199.272,196.938c9.408-9.199,20.181-17.09,32.064-23.319l-39.474-77.472 c-20.097,10.418-38.272,23.732-54.062,39.318L199.272,196.938z"/> 
		<path className="Zone" data-zone="13" data-mult="1" data-name="13" fill="#E6E7E8" d="M495.178,194.672l-77.472,39.474c5.759,11.636,9.934,24.29,12.228,37.725l85.862-13.599 C512.029,235.575,504.97,214.238,495.178,194.672z"/> 
		<path className="Zone" data-zone="14" data-mult="1" data-name="14" fill="#E6E7E8" d="M159.912,271.866c2.26-13.227,6.443-25.912,12.294-37.701l-77.458-39.467 c-9.952,19.833-17.009,41.232-20.714,63.566L159.912,271.866z"/> 
		<path className="ZoneClickable" data-zone="15" data-mult="1" data-name="15" fill="#E6E7E8" d="M493.719,397.984l-77.457-39.466c-6.177,11.765-14.033,22.587-23.308,32.102l61.47,61.47 C470.137,436.118,483.392,417.867,493.719,397.984z"/> 
		<path className="ZoneClickable" data-zone="16" data-mult="1" data-name="16" fill="#E6E7E8" d="M173.601,358.523l-77.472,39.474c10.418,20.107,23.735,38.29,39.326,54.088l61.473-61.473 C187.724,381.197,179.831,370.416,173.601,358.523z"/> 
		<path className="ZoneClickable" data-zone="17" data-mult="1" data-name="17" fill="#E6E7E8" d="M355.713,417.723c-11.643,5.758-24.306,9.931-37.75,12.22l13.599,85.862 c22.705-3.761,44.05-10.818,63.625-20.61L355.713,417.723z"/> 
		<path className="ZoneClickable" data-zone="18" data-mult="1" data-name="18" fill="#E6E7E8" d="M358.529,173.638c11.756,6.174,22.571,14.025,32.081,23.292l61.47-61.47 c-15.966-15.705-34.21-28.955-54.085-39.279L358.529,173.638z"/> 
		<path className="ZoneClickable" data-zone="19" data-mult="1" data-name="19" fill="#E6E7E8" d="M271.904,429.987c-13.237-2.257-25.93-6.441-37.727-12.294l-39.467,77.459 c19.841,9.955,41.249,17.011,63.593,20.714L271.904,429.987z"/> 
		<path className="ZoneClickable" data-zone="20" data-mult="1" data-name="20" fill="#E6E7E8" d="M275.12,159.445c13.48-1.975,26.8-1.922,39.641-0.049l13.602-85.879 c-21.631-3.259-44.1-3.372-66.842,0.066L275.12,159.445z"/> 
	</g>
	<g>
		<path className="Zone" data-zone="1"  data-mult="3" data-name="Triple 1"  fill="#1AB689" d="M315,178.538c11.25,1.937,22.042,5.49,32.086,10.443l8.566-16.811 c-11.79-5.842-24.474-10.017-37.7-12.269L315,178.538z"/> 
		<path className="Zone" data-zone="2"  data-mult="3" data-name="Triple 2"  fill="#E64C3B" d="M377.331,379.565c-8.025,7.827-17.198,14.551-27.307,19.878l8.567,16.814 c11.891-6.237,22.671-14.139,32.082-23.351L377.331,379.565z"/> 
		<path className="Zone" data-zone="3"  data-mult="3" data-name="Triple 3"  fill="#E64C3B" d="M311.822,411.818c-11.483,1.661-22.83,1.615-33.776,0.036l-2.952,18.638 c12.853,1.878,26.185,1.934,39.678-0.043L311.822,411.818z"/> 
		<path className="Zone" data-zone="4"  data-mult="3" data-name="Triple 4"  fill="#1AB689" d="M379.556,212.552c7.822,8.019,14.543,17.183,19.869,27.283l16.815-8.568 c-6.236-11.882-14.135-22.652-23.343-32.057L379.556,212.552z"/> 
		<path className="Zone" data-zone="5"  data-mult="3" data-name="Triple 5"  fill="#1AB689" d="M242.781,188.967c9.913-4.875,20.678-8.42,32.1-10.387l-2.951-18.63 c-13.431,2.287-26.082,6.453-37.716,12.203L242.781,188.967z"/> 
		<path className="Zone" data-zone="6"  data-mult="3" data-name="Triple 6"  fill="#1AB689" d="M411.864,311.771l18.639,2.952c1.87-12.848,1.919-26.176-0.064-39.663l-18.63,2.951 C413.476,289.489,413.435,300.83,411.864,311.771z"/> 
		<path className="Zone" data-zone="7"  data-mult="3" data-name="Triple 7"  fill="#E64C3B" d="M239.865,399.414c-10-5.282-19.205-11.974-27.313-19.858l-13.338,13.338 c9.51,9.28,20.326,17.145,32.087,23.329L239.865,399.414z"/> 
		<path className="Zone" data-zone="8"  data-mult="3" data-name="Triple 8"  fill="#E64C3B" d="M188.95,347.077c-4.875-9.92-8.418-20.694-10.38-32.124l-18.63,2.951c2.282,13.44,6.446,26.1,12.196,37.741 L188.95,347.077z"/> 
		<path className="Zone" data-zone="9"  data-mult="3" data-name="Triple 9"  fill="#1AB689" d="M190.486,239.854c5.279-9.991,11.966-19.189,19.842-27.292l-13.339-13.339 c-9.273,9.504-17.132,20.313-23.313,32.066L190.486,239.854z"/> 
		<path className="Zone" data-zone="10" data-mult="3" data-name="Triple 10" fill="#E64C3B" d="M411.362,314.962c-1.935,11.259-5.488,22.06-10.444,32.113l16.811,8.566 c5.845-11.798,10.02-24.491,12.269-37.727L411.362,314.962z"/> 
		<path className="Zone" data-zone="11" data-mult="3" data-name="Triple 11" fill="#1AB689" d="M178.044,278.008l-18.637-2.952c-1.881,12.846-1.942,26.171,0.028,39.657l18.63-2.951 C176.412,300.286,176.463,288.946,178.044,278.008z"/> 
		<path className="Zone" data-zone="12" data-mult="3" data-name="Triple 12" fill="#E64C3B" d="M212.613,210.279c8.022-7.814,17.188-14.528,27.289-19.847l-8.567-16.813 c-11.883,6.228-22.656,14.119-32.064,23.319L212.613,210.279z"/> 
		<path className="Zone" data-zone="13" data-mult="3" data-name="Triple 13" fill="#E64C3B" d="M417.705,234.146l-16.812,8.566c4.884,9.914,8.436,20.683,10.41,32.109l18.63-2.951 C427.639,258.435,423.464,245.781,417.705,234.146z"/> 
		<path className="Zone" data-zone="14" data-mult="3" data-name="Triple 14" fill="#E64C3B" d="M178.552,274.818c1.945-11.251,5.504-22.044,10.466-32.087l-16.811-8.566 c-5.851,11.789-10.034,24.474-12.294,37.701L178.552,274.818z"/> 
		<path className="ZoneClickable" data-zone="15" data-mult="3" data-name="Triple 15" fill="#1AB689" d="M399.454,349.953c-5.275,10.004-11.962,19.213-19.84,27.326l13.34,13.34 c9.274-9.515,17.131-20.338,23.308-32.102L399.454,349.953z"/> 
		<path className="ZoneClickable" data-zone="16" data-mult="3" data-name="Triple 16" fill="#1AB689" d="M210.27,377.27c-7.819-8.029-14.537-17.203-19.856-27.314l-16.812,8.566 c6.229,11.893,14.123,22.674,23.327,32.089L210.27,377.27z"/> 
		<path className="ZoneClickable" data-zone="17" data-mult="3" data-name="Triple 17" fill="#1AB689" d="M347.146,400.91c-9.922,4.884-20.699,8.434-32.134,10.403l2.951,18.63 c13.444-2.289,26.106-6.462,37.75-12.22L347.146,400.91z"/> 
		<path className="ZoneClickable" data-zone="18" data-mult="3" data-name="Triple 18" fill="#E64C3B" d="M349.965,190.446c9.995,5.272,19.197,11.954,27.305,19.824l13.34-13.34 c-9.51-9.267-20.325-17.118-32.081-23.292L349.965,190.446z"/> 
		<path className="ZoneClickable" data-zone="19" data-mult="3" data-name="Triple 19" fill="#1AB689" d="M274.856,411.348c-11.261-1.943-22.063-5.503-32.114-10.467l-8.566,16.811 c11.797,5.853,24.491,10.037,37.727,12.294L274.856,411.348z"/> 
		<path className="ZoneClickable" data-zone="20" data-mult="3" data-name="Triple 20" fill="#E64C3B" d="M278.071,178.075c11.47-1.659,22.804-1.615,33.738-0.041l2.952-18.639 c-12.841-1.873-26.161-1.926-39.641,0.049L278.071,178.075z"/> 
	</g>
	<g>
		<path className="Zone" data-zone="1"  data-mult="1" data-name="1"  fill="#E6E7E8" d="M309.499,304.119c-0.389,0.616-0.816,1.205-1.279,1.767l71.394,71.394 c7.878-8.114,14.565-17.323,19.84-27.326L309.499,304.119z"/> 

		<path className="Zone" data-zone="2"  data-mult="1" data-name="2"  fill="#E6E7E8" d="M305.942,308.176c-0.559,0.466-1.14,0.906-1.759,1.299l45.841,89.968 c10.109-5.327,19.282-12.051,27.307-19.878L305.942,308.176z"/> 

		<path className="Zone" data-zone="3"  data-mult="1" data-name="3"  fill="#E6E7E8" d="M299.205,278.264c0.7,0.179,1.378,0.413,2.045,0.676l45.837-89.96 c-10.044-4.953-20.836-8.506-32.086-10.443L299.205,278.264z"/> 

		<path className="Zone" data-zone="4"  data-mult="1" data-name="4"  fill="#E6E7E8" d="M311.64,299.167c-0.18,0.709-0.416,1.396-0.682,2.07l89.96,45.837 c4.955-10.052,8.509-20.853,10.444-32.113L311.64,299.167z"/> 

		<path className="Zone" data-zone="5"  data-mult="1" data-name="5"  fill="#E6E7E8" d="M312.128,295.974l99.736,15.797c1.571-10.941,1.611-22.282-0.055-33.76l-99.69,15.789 C312.169,294.532,312.17,295.257,312.128,295.974z"/> 

		<path className="Zone" data-zone="6"  data-mult="1" data-name="6"  fill="#E6E7E8" d="M301.304,310.939c-0.673,0.267-1.365,0.498-2.081,0.681l15.79,99.693 c11.435-1.969,22.212-5.519,32.134-10.403L301.304,310.939z"/> 

		<path className="Zone" data-zone="7"  data-mult="1" data-name="7"  fill="#E6E7E8" d="M293.861,277.768c0.725-0.047,1.442-0.042,2.152,0.001l15.796-99.735 c-10.934-1.574-22.268-1.618-33.738,0.041L293.861,277.768z"/> 

		<path className="Zone" data-zone="8"  data-mult="1" data-name="8"  fill="#E6E7E8" d="M400.893,242.712l-89.969,45.842c0.266,0.666,0.5,1.349,0.684,2.057l99.695-15.79 C409.329,263.395,405.777,252.626,400.893,242.712z"/> 

		<path className="Zone" data-zone="9"  data-mult="1" data-name="9"  fill="#E6E7E8" d="M308.167,283.941c0.46,0.552,0.895,1.127,1.286,1.737l89.972-45.843 c-5.326-10.1-12.047-19.264-19.869-27.283L308.167,283.941z"/> 

		<path className="Zone" data-zone="10" data-mult="1" data-name="10" fill="#E6E7E8" d="M304.13,280.402c0.608,0.384,1.19,0.806,1.745,1.263l71.395-71.394 c-8.108-7.871-17.31-14.552-27.305-19.824L304.13,280.402z"/> 

		<path className="Zone" data-zone="11" data-mult="1" data-name="11" fill="#E6E7E8" d="M288.624,278.939c0.662-0.261,1.343-0.487,2.046-0.666l-15.79-99.693 c-11.422,1.967-22.187,5.511-32.1,10.387L288.624,278.939z"/> 

		<path className="Zone" data-zone="12" data-mult="1" data-name="12" fill="#E6E7E8" d="M281.663,305.877c-0.461-0.559-0.899-1.139-1.288-1.758l-89.96,45.837 c5.319,10.111,12.037,19.285,19.856,27.314L281.663,305.877z"/> 

		<path className="Zone" data-zone="13" data-mult="1" data-name="13" fill="#E6E7E8" d="M285.703,309.452c-0.614-0.392-1.202-0.82-1.762-1.285l-71.389,71.389 c8.108,7.884,17.314,14.576,27.313,19.858L285.703,309.452z"/> 

		<path className="Zone" data-zone="14" data-mult="1" data-name="14" fill="#E6E7E8" d="M290.652,311.618c-0.71-0.183-1.399-0.422-2.075-0.692l-45.835,89.956 c10.051,4.964,20.853,8.524,32.114,10.467L290.652,311.618z"/> 

		<path className="ZoneClickable" data-zone="15" data-mult="1" data-name="15" fill="#E6E7E8" d="M277.776,293.804l-99.732-15.796c-1.581,10.938-1.632,22.278,0.022,33.754l99.695-15.79 C277.717,295.241,277.729,294.519,277.776,293.804z"/> 

		<path className="ZoneClickable" data-zone="16" data-mult="1" data-name="16" fill="#E6E7E8" d="M296.032,312.125c-0.738,0.047-1.467,0.041-2.19-0.005l-15.796,99.733 c10.945,1.579,22.292,1.625,33.776-0.036L296.032,312.125z"/> 

		<path className="ZoneClickable" data-zone="17" data-mult="1" data-name="17" fill="#E6E7E8" d="M278.924,301.233c-0.262-0.669-0.484-1.359-0.663-2.07l-99.69,15.789 c1.962,11.431,5.505,22.204,10.38,32.124L278.924,301.233z"/> 

		<path className="ZoneClickable" data-zone="18" data-mult="1" data-name="18" fill="#E6E7E8" d="M280.448,285.692c0.387-0.606,0.81-1.187,1.269-1.74l-71.389-71.389 c-7.877,8.103-14.563,17.301-19.842,27.292L280.448,285.692z"/> 

		<path className="ZoneClickable" data-zone="19" data-mult="1" data-name="19" fill="#E6E7E8" d="M284.006,281.671c0.552-0.456,1.126-0.888,1.736-1.275l-45.839-89.964 c-10.101,5.319-19.267,12.032-27.289,19.847L284.006,281.671z"/> 

		<path className="ZoneClickable" data-zone="20" data-mult="1" data-name="20" fill="#E6E7E8" d="M278.286,290.614c0.183-0.701,0.419-1.382,0.686-2.049l-89.955-45.834 c-4.961,10.043-8.521,20.836-10.466,32.087L278.286,290.614z"/> 
	</g>
	<path   className="ZoneClickable" data-zone="bulle" data-mult="1" data-name="Bulle" 	   fill="#1AB689" d="M311.953,292.253c-1.488-9.393-10.308-15.801-19.7-14.313 c-9.393,1.488-15.801,10.308-14.313,19.7c1.488,9.393,10.308,15.801,19.7,14.313C307.033,310.466,313.441,301.646,311.953,292.253z M296.133,302.436c-4.136,0.655-8.02-2.167-8.675-6.303c-0.655-4.136,2.167-8.02,6.303-8.675s8.02,2.167,8.675,6.303 C303.091,297.897,300.269,301.781,296.133,302.436z"/> 
	<circle className="ZoneClickable" data-zone="bulle" data-mult="2" data-name="Double Bulle" fill="#E64C3B" cx="294.947" cy="294.947" r="7.582"/>
	<g id="ZonesText">
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.999 -0.0457 0.0457 0.999 274.6112 38.4446)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">2</tspan><tspan x="17.097" y="-0.035" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.905">0</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.9498 -0.313 0.313 0.9498 205.7328 53.578)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">5</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.7764 -0.6303 0.6303 0.7764 127.7998 99.4039)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">1</tspan><tspan x="12.929" y="-0.071" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.313">2</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.5847 -0.8113 0.8113 0.5847 80.891 152.119)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">9</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.2576 -0.9662 0.9662 0.2576 44.7848 234.996)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">1</tspan><tspan x="12.946" y="-0.069" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.307">4</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(-0.0536 -0.9986 0.9986 -0.0536 38.5028 315.235)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">1</tspan><tspan x="12.965" y="-0.008" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="2.855">1</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.3131 0.9497 -0.9497 0.3131 18.9385 375.9376)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">8</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.6221 0.7829 -0.7829 0.6221 63.8893 466.2784)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">6</tspan><tspan x="-14.728" y="-0.932" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.47">1</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.817 0.5767 -0.5767 0.817 123.473 525.8015)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">7</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.9635 0.2677 -0.2677 0.9635 208.7233 569.3691)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">9</tspan><tspan x="-14.728" y="-0.932" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.47">1</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(1 -0.0045 0.0045 1 286.8444 582.4755)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">3</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.9334 -0.3589 0.3589 0.9334 391.6315 565.7778)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">7</tspan><tspan x="-14.499" y="-0.708" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="2.899">1</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.8052 -0.593 0.593 0.8052 458.2478 531.7195)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">2</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.5521 -0.8338 0.8338 0.5521 529.3895 461.6111)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">5</tspan><tspan x="-14.701" y="-0.923" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.447">1</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.2673 -0.9636 0.9636 0.2673 569.4284 380.9718)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">0</tspan><tspan x="-14.738" y="-0.926" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.453">1</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.0038 1 -1 0.0038 552.0738 284.6784)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">6</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.3595 0.9331 -0.9331 0.3595 532.5704 196.4064)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">1</tspan><tspan x="12.921" y="-0.088" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.421">3</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.5931 0.8051 -0.8051 0.5931 496.915 135.5274)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">4</text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.8393 0.5436 -0.5436 0.8393 429.2679 75.5541)"><tspan x="0" y="0" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">1</tspan><tspan x="12.922" y="-0.091" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725" rotate="3.437">8</tspan></text>
		
		<circle fill="none" cx="294.947" cy="294.947" r="257.16"/>
		<text transform="matrix(0.9554 0.2953 -0.2953 0.9554 364.673 47.3321)" fill="#D0D2D3" fontFamily="'Impact'" fontSize="34.8725">1</text>
	</g>
</svg>;

var Cible = React.createClass({

	componentDidMount: function() {
		var ReactCible = this;
		var SnapCible  = Snap('#Cible');
		var clickables = SnapCible.selectAll('.ZoneClickable');

		_.each(clickables, function(zoneClickable){
			var fill   = Snap.color(zoneClickable.attr('fill'));
			var l      = (fill.l + 0.3 > 1) ? 1 : fill.l + 0.3;
			var fillUp = Snap.hsl2rgb(fill.h, fill.s, l);

			var hoverin  = function(){ this.animate({fill:fillUp}, 300, mina.linear); };
			var hoverout = function(){ this.animate({fill:fill}, 300, mina.linear);   };
			zoneClickable.hover(hoverin, hoverout, zoneClickable, zoneClickable);

			zoneClickable.mouseup(function(){
				//console.log(this);
				//dataset not working with IE < 11 see : https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes
				var name = this.node.getAttribute('data-name');
				var mult = parseInt(this.node.getAttribute('data-mult'));
				var zone = this.node.getAttribute('data-zone')
				console.info('click sur : ' + name);
				/*
				var Pointer = SnapCible.circle(50+'%',50+'%', 10);
				Pointer.drag(onmove:function(e){

				},onstart:{

				},onend:{

				});*/
				ReactCible._click(zone,mult);
			})

		});
	},
	render: function() {
		return CibleSVG;
	},

	_click: function(zone,mult) {
		console.log(zone,mult);
		DartBoardActions.addPointTo(this.props.selectedPlayer.id, zone, mult);
	}

});

module.exports = Cible;

