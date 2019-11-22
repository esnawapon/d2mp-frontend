import { Component, OnInit, Input, forwardRef, ElementRef, HostListener, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { HERO_OPTIONS, HeroOption } from '../constaints';

@Component({
  selector: 'app-hero-picker',
  templateUrl: './hero-picker.component.html',
  styleUrls: ['./hero-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HeroPickerComponent),
      multi: true
    }
  ]
})
export class HeroPickerComponent implements OnInit, ControlValueAccessor {
  @Input() value: number;
  @Input() disabled: boolean;
  onChange: (arg: number) => void;
  onTouched: () => void;

  open: boolean = false;
  strOptions: HeroOption[];
  agiOptions: HeroOption[];
  intOptions: HeroOption[];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.strOptions = HERO_OPTIONS.filter(each => each.primary === 'STR');
    this.agiOptions = HERO_OPTIONS.filter(each => each.primary === 'AGI');
    this.intOptions = HERO_OPTIONS.filter(each => each.primary === 'INT');
  }

  activate() {
    if (this.open) { return; }
    if (this.disabled) { this.open = false; }
    this.open = true;
  }

  deactivate () {
    if (!this.open) { return; }
    this.open = false;
  }

  select(option: HeroOption) {
    this.value = option.value;
    this.deactivate();
    if (this.onTouched) {
      this.onTouched();
    }
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  getHeroName(value: number): string {
    return HERO_OPTIONS.find(each => each.value === value).name;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if (!this.open) { return; }
    const target = event.target as HTMLElement;
    const self = this.el.nativeElement as HTMLElement;
    const isClickOnSelf = self.contains(target);
    if (!isClickOnSelf) {
      this.deactivate();
    }
  }

  @HostBinding('attr.disabled')
  get isDisabled(): string | void {
    return this.disabled ? '' : undefined;
  }

  // ------ ControlValueAccessor ------ //
	writeValue(value: any): void {
		this.value = value;
	}
	registerOnChange(fn: () => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
	// ------ ControlValueAccessor ------ //
}
