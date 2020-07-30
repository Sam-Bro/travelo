import React from "react";
//import { Form } from "react-bootstrap";


export class SetLang extends React.Component {
  handleChange(e) {
    const language = e.target.value;
    this.props.onChange(language);
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <h1 className="translateTitle">translating to: {this.props.language}</h1>
        <select id="languages" onChange={this.handleChange}>
          <option value="am">am</option>
          <option value="ar">ar</option>
          <option value="az">az</option>
          <option value="be">be</option>
          <option value="bg">bg</option>
          <option value="bn">bn</option>
          <option value="bs">bs</option>
          <option value="ca">ca</option>
          <option value="ceb">ceb</option>
          <option value="co">co</option>

          <option value="cs">cs</option>
          <option value="cy">cy</option>
          <option value="da">da</option>
          <option value="de">de</option>
          <option value="el">el</option>
          <option value="en">en</option>
          <option value="eo">eo</option>
          <option value="es">es</option>
          <option value="et">et</option>
          <option value="eu">eu</option>

          <option value="fa">fa</option>
          <option value="fi">fi</option>
          <option value="fr">fr</option>
          <option value="fy">fy</option>
          <option value="ga">ga</option>
          <option value="gd">gd</option>
          <option value="gl">gl</option>
          <option value="gu">gu</option>
          <option value="ha">ha</option>
          <option value="haw">haw</option>

          <option value="he">he</option>
          <option value="hi">hi</option>
          <option value="hmn">hmn</option>
          <option value="hr">hr</option>
          <option value="ht">ht</option>
          <option value="hu">hu</option>
          <option value="hy">hy</option>
          <option value="id">id</option>
          <option value="ig">ig</option>
          <option value="is">is</option>

          <option value="it">it</option>
          <option value="iw">iw</option>
          <option value="ja">ja</option>
          <option value="jw">jw</option>
          <option value="ka">ka</option>
          <option value="kk">kk</option>
          <option value="km">km</option>
          <option value="kn">kn</option>
          <option value="ko">ko</option>
          <option value="ku">ku</option>

          <option value="ky">ky</option>
          <option value="la">la</option>
          <option value="lb">lb</option>
          <option value="lo">lo</option>
          <option value="lt">lt</option>
          <option value="lv">lv</option>
          <option value="mg">mg</option>
          <option value="mi">mi</option>
          <option value="mk">mk</option>
          <option value="ml">ml</option>

          <option value="mn">mn</option>
          <option value="mr">mr</option>
          <option value="ms">ms</option>
          <option value="mt">mt</option>
          <option value="my">my</option>
          <option value="ne">ne</option>
          <option value="nl">nl</option>
          <option value="no">no</option>
          <option value="ny">ny</option>
          <option value="or">or</option>

          <option value="pa">pa</option>
          <option value="pl">pl</option>
          <option value="ps">ps</option>
          <option value="pt">pt</option>
          <option value="ro">ro</option>
          <option value="ru">ru</option>
          <option value="rw">rw</option>
          <option value="sd">sd</option>
          <option value="si">si</option>
          <option value="sk">sk</option>

          <option value="sl">sl</option>
          <option value="sm">sm</option>
          <option value="sn">sn</option>
          <option value="so">so</option>
          <option value="sq">sq</option>
          <option value="sr">sr</option>
          <option value="st">st</option>
          <option value="su">su</option>
          <option value="sv">sv</option>
          <option value="sw">sw</option>

          <option value="ta">ta</option>
          <option value="te">te</option>
          <option value="tg">tg</option>
          <option value="th">th</option>
          <option value="tk">tk</option>
          <option value="tl">tl</option>
          <option value="tr">tr</option>
          <option value="tt">tt</option>
          <option value="ug">ug</option>
          <option value="uk">uk</option>

          <option value="ur">ur</option>
          <option value="uz">uz</option>
          <option value="vi">vi</option>
          <option value="xh">xh</option>
          <option value="yi">yi</option>
          <option value="yo">yo</option>
          <option value="zh">zh</option>
          <option value="zh-CN">zh-CN</option>
          <option value="zh-TW">zh-TW</option>
          <option value="zu">zu</option>
        </select>
      </div>
    );
  }
}
