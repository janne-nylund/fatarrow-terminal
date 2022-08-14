export const Prompt = ({ text }) => {
  return (
    <div className="prompt">
      visitor@fatarrow:~$ <span style={{ paddingLeft: "2px" }}>{text}</span>
    </div>
  );
};

export const Header = () => {
  var inputASCII = [
    "<pre><code>**************************************************",
    " ______  ______   ______",
    "/\\  ___\\/\\  __ \\ /\\__  _\\",
    "\\ \\  __\\\\ \\  __ \\\\/_/\\ \\/",
    " \\ \\_\\   \\ \\_\\ \\_\\  \\ \\_\\",
    "  \\/_/    \\/_/\\/_/   \\/_/",
    " ______   ______   ______   ______   __     __",
    "/\\  __ \\ /\\  == \\ /\\  == \\ /\\  __ \\ /\\ \\  _ \\ \\",
    '\\ \\  __ \\\\ \\  __< \\ \\  __< \\ \\ \\/\\ \\\\ \\ \\/ ".\\ \\',
    ' \\ \\_\\ \\_\\\\ \\_\\ \\_\\\\ \\_\\ \\_\\\\ \\_____\\\\ \\__/".~\\_\\',
    "  \\/_/\\/_/ \\/_/ /_/ \\/_/ /_/ \\/_____/ \\/_/   \\/_/",
    "",
    "**************************************************",

    "</code></pre>"
  ].join("\n");

  // convert inputASCII to object for dangerouslySetInnerHTML
  var wrappedASCII = { __html: inputASCII };

  // dangerouslySetInnerHTML is React’s replacement for innerHTML
  return <span dangerouslySetInnerHTML={wrappedASCII}></span>;
};

export const Default = () => {
  return (
    <div>
      Welcome to my interactive web terminal.
      <br />
      For a list of available commands, type 'help'.
      <br />
      <br />
    </div>
  );
};

export const Invalid = () => {
  return (
    <div>
      <small>
        Invalid command. For a list of available commands, type 'help'.
      </small>
      <br />
      <br />
    </div>
  );
};

export const Help = () => {
  return (
    <div className="view">
      <table>
        <tbody>
          <tr className="header">
            <td colSpan="3" className="command-head">
              Commands:
            </td>
          </tr>

          <tr>
            <td>whois</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Info about me</small>
            </td>
          </tr>

          <tr>
            <td>whoami</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Do I know you?</small>
            </td>
          </tr>

          {/* <tr>
            <td>github</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Them codes</small>
            </td>
          </tr> */}

          <tr>
            <td>contact</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Contact information</small>
            </td>
          </tr>

          <tr>
            <td>links</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Links to projects</small>
            </td>
          </tr>

          <tr>
            <td>time</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Because why not?</small>
            </td>
          </tr>

          <tr>
            <td>clear</td>
            <td>&nbsp;&nbsp;&nbsp;//&nbsp;</td>
            <td>
              <small>Clear the terminal</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const About = () => {
  return (
    <div className="view">
      Hi, my name is Janne Nylund{" "}
      <span role="img" aria-label="wave">
        👋{" "}
      </span>
      <br />
      <br />
      I'm a student at Centria University of Applied Sciences,{" "}
      <i>Bachelor of Engineering, Information Technology</i> ( TOTAL CREDITS:
      162 / AVERAGE GRADE: 4.45). Finally after the pandemic (fingers crossed),
      I'm looking for a suitable place to carry out my practical training and 
      hopefully write my thesis.
      <br />
      <br />
      <span className="command-head">
        {" "}
        <span role="img" aria-label="learning">
          🚀{" "}
        </span>
        Skills / Tech stack:
      </span>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Remix</li>
        <li>Tailwind Css</li>
        <li>
          Prisma <small>(ORM - object-relational mapper)</small>
        </li>
        <li>
          Redux <small>(Redux Toolkit)</small>
        </li>
        <li>Redux-Saga</li>
        <li>SQL/NoSQL databases (SQLite, PostgreSQL, MongoDB)</li>
      </ul>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="view">
      <p>
        <span className="command-head">Contact info:</span>
      </p>
      Janne Nylund
      <br />
      <a href="mailto:janne@fatarrow.io">janne@fatarrow.io</a> *
      <br />
      +358 44 750 5061
      <br />
      <br />
      <small>*type the command 'send' to open up a new email</small>
    </div>
  );
};

export const Links = () => {
  return (
    <div className="view">
      <p>
        <span className="command-head">Links to example projects:</span>
      </p>
      <a href="https://gist.github.com/janne-nylund/7f09ca55fe012c86c7d35fe36ca9bd2c">
        Gist
      </a>{" "}
      <sup>*</sup>
      <br />
      <br />
      <small>
        <sup>*</sup> type 'gist' to open link in new window
      </small>
    </div>
  );
};

export const Utilities = ({ props }) => {
  return (
    <div className="view">
      <span className="command-head">{`computer says:`}</span> {props}
    </div>
  );
};
