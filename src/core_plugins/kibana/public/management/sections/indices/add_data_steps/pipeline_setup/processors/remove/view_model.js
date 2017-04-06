import Processor from '../base/view_model';

export class Remove extends Processor {
  constructor(processorId) {
    super(processorId, 'remove', 'Remove');
    this.sourceField = '';
  }

  get description() {
    const source = this.sourceField || '?';
    return `[${source}]`;
  }

  get model() {
    return {
      processorId: this.processorId,
      typeId: this.typeId,
      sourceField: this.sourceField || ''
    };
  }
};
