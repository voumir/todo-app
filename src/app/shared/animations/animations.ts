import { animate, style, transition, trigger, query, stagger } from '@angular/animations';

export const buttonsEntrance = trigger('buttonsEntrance', [
  transition('* => *', [
    query('.row', style({ opacity: 0, transform: 'translateX(-40px)' })),

    query('.row', stagger('500ms', [
      animate('800ms 0.8s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ])),

    query('.row', [
      animate(1000, style('*'))
    ])
  ])
]);

export const contentEntrance = trigger('contentEntrance', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s 1s ease-out')
  ])
]);

export const inputEntrance = trigger('inputEntrance', [
  transition(':enter', [
    style({ transform: 'translateY(-25px)', opacity: 0 }),
    animate('1s ease-out')
  ])
]);

export const particlesEntrance = trigger('particlesEntrance', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-out')
  ])
]);

export const taskAnimation = trigger('taskAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out')
  ])
]);
