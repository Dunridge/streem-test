import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: User;
  @Input() hideButton = false;

  showPosts = false;
}
