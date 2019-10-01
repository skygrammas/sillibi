import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {



  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-buttons slot="end">
            <ion-button href={"#/edit_profile"}>
              <ion-label color={"primary"}>Edit</ion-label>
            </ion-button>
          </ion-buttons>
          <ion-title>My Profile</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card>
          <ion-item lines={"none"} style={{marginLeft:"39vw", marginRight:"39vw", marginTop:"2vh", height:"8vh"}}>
            <ion-avatar style={{borderRadius:"10vw", borderColor:"dark-purple"}}>
              <img src="../../assets/icon/contact-avatar.png"/>
            </ion-avatar>
          </ion-item>
          <ion-grid>
            <ion-row align-items-center={true} justify-content-around={true}>
              <ion-item color={"clear"} style={{width:"84vw", marginRight:"5vw"}}>
                <ion-label position={"floating"} color={"medium"}>First Name</ion-label><ion-input/>
              </ion-item>
            </ion-row>
            <ion-row align-items-center={true} justify-content-around={true}>
              <ion-item color={"clear"} style={{width:"84vw", marginRight:"5vw"}}>
                <ion-label position={"floating"} color={"medium"}>Last Name</ion-label><ion-input/>
              </ion-item>
            </ion-row>
            <ion-row align-items-center={true} justify-content-around={true}>
              <ion-item color={"clear"} style={{width:"84vw", marginRight:"5vw"}}>
                <ion-label position={"floating"} color={"medium"}>Email Address</ion-label><ion-input/>
              </ion-item>
            </ion-row>
            <ion-row>
              <ion-item lines={"full"} color={"clear"} style={{width:"100vw"}}>
                <ion-label position={"floating"} color={"medium"}>COMMUNICATION SETTINGS</ion-label>
              </ion-item>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-icon color={"medium"} name="call" size={"large"} style={{marginTop:"2vh", marginBottom:"2vh"}}/>
              </ion-col>
              <ion-col>
                <ion-icon color={"medium"} name="text" size={"large"} style={{marginLeft:"-30vw", marginTop:"2vh", marginBottom:"2vh"}}/>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card>
      </ion-content>,

      <ion-footer>
        <ion-toolbar color={"dark-purple"} justify-content-around>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-button icon-only item-end fill={"clear"}><ion-icon color={"warning"} name="contact" size={"large"}/></ion-button>
              </ion-col>
              <ion-col>
                <ion-button icon-only item-end fill={"clear"}><ion-icon color={"medium"} name="copy"size={"large"}/></ion-button>
              </ion-col>
              <ion-col>
                <ion-button icon-only item-end fill={"clear"}><ion-icon color={"medium"} name="paper" size={"large"}/></ion-button>
              </ion-col>
              <ion-col>
                <ion-button icon-only item-end fill={"clear"}><ion-icon color={"medium"} name="more" size={"large"}/></ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
