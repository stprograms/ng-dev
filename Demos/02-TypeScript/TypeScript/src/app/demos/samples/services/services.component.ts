import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  // Antipattern
  url = 'http://localhost:3000/skills';
  skills: Skill[];

  constructor(private skillsService: SkillsService, private http: HttpClient) {}

  ngOnInit() {}

  logPipe = (msg: string, data: any) => {
    console.log(`logPipe() - ${msg}:`, data);
  };

  usingFetch() {
    fetch(this.url)
      .then((resp: Response) => {
        console.log('Response received from fetch', resp);
        return resp.json(); // Notice Response Object
      })
      .then((data: Skill[]) => {
        console.log('Data received from fetch', data);
      });
  }

  usingFetchAwait() {
    async function getSkills() {
      const response = await fetch(this.url);
      const voucher = await response.json();
      console.log('Data received using fetch - await');
      console.log(voucher);
    }

    getSkills();
  }

  postFetch() {
    // Make sure you have installed json-server: npm i -g json-server
    // Run it: json-server db.json -> provides skills api
    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(this.url, options)
      .then(function (res) {
        if (res.ok) {
          return res.statusText;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  async usingAxios() {
    const api = this.url;

    await axios.get(api).then((result) => console.log(result.data));

    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    axios.post(api, param);
  }

  //Antipattern
  useClientInComponent() {
    //untyped
    this.http.get(this.url).subscribe((data) => console.log(data));
    //typed
    this.http.get<Skill[]>(this.url).subscribe((data) => console.log(data));
  }

  consumeService() {
    this.skillsService.getSkills().subscribe(
      //handles event
      (data: Skill[]) => {
        console.log('Data from skillsService ', data);
        this.skills = data;
      }
    );
  }
}
