import {Component} from '@angular/core';


@Component({
    selector: 'foot',
    styleUrls: ['./app/app.footer-component.css'],
    template: `
        <div id="mainFooter">
            <hr/>
            <div id="q">
                <div id="aboutUs"><span class="name">Shortly About Us</span>
                    <span>{{text}}</span></div>
                <div id="contacts"><span class="name">Contact US</span>
                    <div><img src="./img/phone.png"/><span>phone:(123)-456-7890</span></div>
                    <div><img src="./img/mail.png"/><span>mail:nfo@companyname.com</span></div>
                    <div><img src="./img/skype.png"/><span>skype:skype.name</span></div>
                </div>
                <div id="saty"><span class="name">Stay Connected</span>
                    <div><img src="./img/Facebook Icon.png" alt=""></div>
                    <div><img src="./img/g+.png" alt=""></div>
                    <div><img src="./img/Twitter icon.png" alt=""></div>
                </div>
            </div>
        </div>`
})

export class AppFooterComponent {


    text: string = `Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia. 
    Suspendisse sollicitudin velit sed leo. 
Ut pharetra augue nec augue.Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. 
 porta diam eu massa. Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec eget
  tellus non erat lacinia fermentum.
            Donec in velit vel ipsum auctor pulvinar. 
            Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. `
}
