import {Component, AfterViewInit, ViewChild, Input} from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import domtoimage from 'dom-to-image';

interface ImageSliceMeta {
  width: number;
  height: number;
  imageOffsetX?: number;
  imageOffsetY?: number;
  x?: number;
  y?: number;
}

@Component({
  selector: 'sed-block-assemble',
  templateUrl: './sed-block-assemble.component.html',
  styleUrls: ['./sed-block-assemble.component.scss'],
  animations: [
    trigger('sedBlockAssembleAnimation', [
      transition(':enter', [
        query('[data-sed-block-assemble-image-slice]', [
          style({
            opacity: 0,
            transform: 'translateX(500px) scale(5)',
          }),
          stagger(20, [
            animate('.3s .1s ease', style({
              opacity: 1,
              transform: '*',
            }))
          ]),
        ], {optional: true})
      ])
    ])
  ]
})
export class SedBlockAssembleComponent implements AfterViewInit {
  show = false;
  dataUrl: string;
  imagesMeta: Array<ImageSliceMeta> = [];
  squareSize = 50;

  @Input() animationStyle = 'line';
  @ViewChild('sedblockassemblecomponent') componentEl;

  constructor() {}

  ngAfterViewInit(): void {
    domtoimage.toPng(this.componentEl.nativeElement)
      .then(dataUrl => this.dataUrl = dataUrl)
      .then(() => this.imagesMeta = this[
        this.animationStyle === 'line' ? 'createLineByLineImageSlicesMeta' :
          this.animationStyle === 'diagonal' ? 'createDiagonalImageSlicesMeta' :
            'createLineByLineImageSlicesMeta'
        ]())
      .catch(error => console.error('Unable to create png from dom: ', error));
  }

  createLineByLineImageSlicesMeta(): ImageSliceMeta[] {
    const el = this.componentEl.nativeElement;
    const xCount = Math.ceil(el.offsetWidth / this.squareSize);
    const yCount = Math.ceil(el.offsetHeight / this.squareSize);
    const slicesCount = xCount * yCount;

    return Array(slicesCount).fill(null).map((val, index) => ({
      width: this.squareSize,
      height: this.squareSize,
      x: this.squareSize * (index % xCount),
      y: this.squareSize * Math.floor(index / xCount),
      imageOffsetX: -(this.squareSize * (index % xCount)),
      imageOffsetY: -(this.squareSize * Math.floor(index / xCount))
    }));
  }

  createDiagonalImageSlicesMeta(): ImageSliceMeta[] {
    const el = this.componentEl.nativeElement;
    const xCount = Math.ceil(el.offsetWidth / this.squareSize);
    const yCount = Math.ceil(el.offsetHeight / this.squareSize);
    const slicesCount = xCount + yCount;

    return Array(slicesCount).fill(null).reduce((accum, val, index) => {
      const xMore = index > xCount ? index - xCount : 0;
      const extraOffset = xMore ? xMore * this.squareSize : 0;
      let count = (index > yCount ? yCount : index);

      if(xMore) {
        count = count - xMore;
      }

      return accum.concat(Array(count).fill(null).map((itemVal, i) => ({
        width: this.squareSize,
        height: this.squareSize,
        x: this.squareSize * (index - i - 1) - extraOffset,
        y: this.squareSize * i + extraOffset,
        imageOffsetX: -(this.squareSize * (index - i - 1)) + extraOffset,
        imageOffsetY: -(this.squareSize * i) - extraOffset
      })));
    }, []);
  }

  blockAssembleAnimationFinished(): void {
    this.show = true;
  }
}
