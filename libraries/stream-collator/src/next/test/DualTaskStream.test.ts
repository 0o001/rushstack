// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/// <reference types="mocha" />

import { assert } from 'chai';
import * as colors from 'colors';

import { DualTaskStream } from '../DualTaskStream';

const helloWorld: string = 'Hello, world!';

describe('DualTaskStream', () => {
  it('passes stdout values through unmodified', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream();

    stream.on('data', (data: string | Buffer) => {
      assert.equal(data.toString(), helloWorld);
      done();
    });

    stream.stdout.write(helloWorld);
  });

  it('writes stderr values in red', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream();

    stream.on('data', (data: string | Buffer) => {
      assert.equal(data.toString(), colors.red(helloWorld));
      done();
    });

    stream.stderr.write(helloWorld);
  });

  it('writes warnings written to stderr in yellow to stdout', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream();
    var helloWorld = 'Warning - ' + helloWorld; /* tslint:disable-line */

    stream.on('data', (data: string | Buffer) => {
      assert.equal(data.toString(), colors.yellow(helloWorld));
      assert.equal(stream.stdout.readAll(), colors.yellow(helloWorld));
      done();
    });

    stream.stderr.write(helloWorld);
  });

  it('doesn\'t write data in quiet mode', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream(true);

    stream.stdout.write(helloWorld);

    stream.stdout.end();
    assert.isNull(stream.read());

    done();
  });

  it('doesn\'t write warnings from stderr in quiet mode', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream(true);
    var helloWorld = 'Warning - ' + helloWorld; /* tslint:disable-line */

    stream.stderr.write(helloWorld);

    stream.stderr.end();
    assert.isNull(stream.read());

    done();
  });

  it('end() closes both substreams', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream(true);

    let stderrClosed: boolean, stdoutClosed: boolean = false;

    const finishedIfBothStreamsClosed: () => void = () => {
      if (stderrClosed && stdoutClosed) {
        done();
      }
    };

    stream.stderr.on('end', () => {
      stderrClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.stdout.on('end', () => {
      stdoutClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.end();
  });

  it('end() closes both substreams even if stdout is complete', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream(true);

    let stderrClosed: boolean, stdoutClosed: boolean = false;

    const finishedIfBothStreamsClosed: () => void = () => {
      if (stderrClosed && stdoutClosed) {
        done();
      }
    };

    stream.stderr.on('end', () => {
      stderrClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.stdout.on('end', () => {
      stdoutClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.stdout.end();
    stream.end();
  });

  it('end() closes both substreams even if stderr is complete', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream(true);

    let stderrClosed: boolean, stdoutClosed: boolean = false;

    const finishedIfBothStreamsClosed: () => void = () => {
      if (stderrClosed && stdoutClosed) {
        done();
      }
    };

    stream.stderr.on('end', () => {
      stderrClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.stdout.on('end', () => {
      stdoutClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.stderr.end();
    stream.end();
  });

    it('can call end twice without error', (done: () => void) => {
    const stream: DualTaskStream = new DualTaskStream(true);

    let stderrClosed: boolean, stdoutClosed: boolean = false;

    const finishedIfBothStreamsClosed: () => void = () => {
      if (stderrClosed && stdoutClosed) {
        assert.doesNotThrow(() => { stream.end(); });
        done();
      }
    };

    stream.stderr.on('end', () => {
      stderrClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.stdout.on('end', () => {
      stdoutClosed = true;
      finishedIfBothStreamsClosed();
    });

    stream.end();
  });
});
